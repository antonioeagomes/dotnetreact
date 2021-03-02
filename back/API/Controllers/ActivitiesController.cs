using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using MediatR;
using Application.Activities;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        /* Injetar o Mediator na controller, em vez do DataContext */
        // private readonly DataContext _context;

        private readonly IMediator _mediator;
        public ActivitiesController(IMediator mediator)  //(DataContext context)
        {
            // _context = context;
            _mediator = mediator;
        }
        
        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            // return await _context.Activities.ToListAsync();
            return await _mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {
            return Ok();
        }
    }
}