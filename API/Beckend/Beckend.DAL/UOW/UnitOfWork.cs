using Beckend.DAL.Entities;
using Beckend.DAL.IRepositories;
using Beckend.DAL.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
//using IBA.DAL.Repository.Retail;

namespace Beckend.DAL.UOW
{
    public class UnitOfWork :IUnitOfWork
    {

        private readonly NapsStp2019Context _napsStp2019Context;
        public IRequestRepository Requests { get; }

        public UnitOfWork(NapsStp2019Context dbContext,IRequestRepository requestRepository)
        {
            _napsStp2019Context = dbContext;

            Requests = requestRepository;
        }
        public int Save()
        {
            var result = _napsStp2019Context.SaveChanges();
            return result;
        }
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                _napsStp2019Context.Dispose();
            }
        }
    }
}
