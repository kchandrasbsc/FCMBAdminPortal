using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Beckend.DAL.Entities;
using Beckend.BAL.Interface;

namespace Beckend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StpRequestsController : ControllerBase
    {
        public readonly IRequestBal _requestBal;

        public StpRequestsController(IRequestBal requestBal)
        {
            _requestBal = requestBal;
        }

        // GET: api/StpRequests
        [HttpGet]
        public async Task<IActionResult> GetStpRequests()
        {
            var requests = await _requestBal.GetAllRequests();
            if (requests == null)
          {
              return NotFound();
          }
            return Ok(requests);
        }

        // GET: api/StpRequests/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetStpRequestById(int id)
        {
            var requesttDetails = await _requestBal.GetRequestById(id);

            if (requesttDetails != null)
            {
                return Ok(requesttDetails);
            }
            else
            {
                return BadRequest();
            }
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

    }
}
