using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities
{
    // Utilizando Mediator
    public class List
    {
        // Será chamada List.Query
        public class Query : IRequest<List<Activity>> { }

        public class Handler : IRequestHandler<Query, List<Activity>> 
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                /* 
                * Embora isso já tenha sido implementado na controller,
                * a logica deve ficar na camada Application
                */
                return await _context.Activities.ToListAsync();
            }
        }
    }
}