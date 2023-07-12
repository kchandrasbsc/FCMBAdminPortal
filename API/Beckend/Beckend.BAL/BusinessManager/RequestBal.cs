using Beckend.BAL.Interface;
using Beckend.DAL.UOW;
using Beckend.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Beckend.BAL.BusinessManager
{
    public class RequestBal : IRequestBal
    {
        public IUnitOfWork _unitOfWork;

        public RequestBal(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }


        public async Task<IEnumerable<Stp_Request>> GetAllRequests()
        {
            var stpRequestList = await _unitOfWork.Requests.GetAll();
            return stpRequestList;
        }

        public async Task<Stp_Request> GetRequestById(int id)
        {
            if (id > 0)
            {
                var stpRequestList = await _unitOfWork.Requests.GetById(id);
                if (stpRequestList != null)
                {
                    return stpRequestList;
                }
            }
            return null;
        }


    }
}
