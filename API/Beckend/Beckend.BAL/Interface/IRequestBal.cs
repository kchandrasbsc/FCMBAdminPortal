using Beckend.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Beckend.BAL.Interface
{
    public interface IRequestBal
    {
        Task<IEnumerable<Stp_Request>> GetAllRequests();
        Task<Stp_Request> GetRequestById(int requestId);
    }
}
