using Beckend.DAL.IRepositories;
using Beckend.DAL.Repositories;
using Beckend.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Beckend.DAL.Repositories
{
    public  class RequestRepository:GenericRepository<Stp_Request>, IRequestRepository
    {
        public RequestRepository(NapsStp2019Context napsStp2019Context) : base(napsStp2019Context)
        {


        }

    }
}
