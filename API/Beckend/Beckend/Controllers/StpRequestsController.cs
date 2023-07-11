using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Beckend.Models;

namespace Beckend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StpRequestsController : ControllerBase
    {
        private readonly NapsStp2019Context _context;

        public StpRequestsController(NapsStp2019Context context)
        {
            _context = context;
        }

        // GET: api/StpRequests
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StpRequest>>> GetStpRequests()
        {
          if (_context.StpRequests == null)
          {
              return NotFound();
          }
            return await _context.StpRequests.ToListAsync();
        }

        // GET: api/StpRequests/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StpRequest>> GetStpRequest(long id)
        {
          if (_context.StpRequests == null)
          {
              return NotFound();
          }
            var stpRequest = await _context.StpRequests.FindAsync(id);

            if (stpRequest == null)
            {
                return NotFound();
            }

            return stpRequest;
        }

        //// PUT: api/StpRequests/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutStpRequest(long id, StpRequest stpRequest)
        //{
        //    if (id != stpRequest.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(stpRequest).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!StpRequestExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        //// POST: api/StpRequests
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPost]
        //public async Task<ActionResult<StpRequest>> PostStpRequest(StpRequest stpRequest)
        //{
        //  if (_context.StpRequests == null)
        //  {
        //      return Problem("Entity set 'NapsStp2019Context.StpRequests'  is null.");
        //  }
        //    _context.StpRequests.Add(stpRequest);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetStpRequest", new { id = stpRequest.Id }, stpRequest);
        //}

        //// DELETE: api/StpRequests/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteStpRequest(long id)
        //{
        //    if (_context.StpRequests == null)
        //    {
        //        return NotFound();
        //    }
        //    var stpRequest = await _context.StpRequests.FindAsync(id);
        //    if (stpRequest == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.StpRequests.Remove(stpRequest);
        //    await _context.SaveChangesAsync();

        //    return NoContent();
        //}

        private bool StpRequestExists(long id)
        {
            return (_context.StpRequests?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
