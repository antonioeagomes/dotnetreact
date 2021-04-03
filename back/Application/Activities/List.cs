using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Application.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Persistence;

namespace Application.Activities
{
    // Utilizando Mediator
    public class List
    {
        // Será chamada List.Query
        public class Query : IRequest<Result<PagedList<ActivityDto>>>
        {
            public ActivityParams PagingParams { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<PagedList<ActivityDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            private readonly IUserAccessor _userAccessor;

            public Handler(DataContext context, IMapper mapper, IUserAccessor userAccessor)
            {
                this._userAccessor = userAccessor;
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<PagedList<ActivityDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                /* 
                * Embora isso já tenha sido implementado na controller,
                * a logica deve ficar na camada Application
                */
                var query = _context.Activities
                    .Where(d => d.Date >= request.PagingParams.StartDate)
                    .OrderBy(a => a.Date)
                    .ProjectTo<ActivityDto>(_mapper.ConfigurationProvider,
                        new { currentUsername = _userAccessor.GetUserName() })
                    .AsQueryable();

                if (request.PagingParams.isGoing && !request.PagingParams.isHost)
                {
                    query = query.Where(x => x.Attendees.Any(a =>
                        a.Username == _userAccessor.GetUserName()));
                }

                if (request.PagingParams.isHost && !request.PagingParams.isGoing)
                {
                    query = query.Where(x => x.HostUsername == _userAccessor.GetUserName());
                }

                return Result<PagedList<ActivityDto>>.Success(
                    await PagedList<ActivityDto>.CreateAsync(query, request.PagingParams.PageNumber,
                    request.PagingParams.PageSize)
                );
            }
        }
    }
}