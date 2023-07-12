using Beckend.DAL.IRepositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Beckend.DAL.UOW;
using Beckend.DAL;

namespace Beckend.DAL.Repositories
{
    public abstract class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        protected readonly NapsStp2019Context _dbContext;

        protected GenericRepository(NapsStp2019Context context)
        {
            _dbContext = context;
        }

        public async Task<T> GetById(int id)
        {
            var _id = Convert.ToInt64(id);
            return await _dbContext.Set<T>().FindAsync(_id);
        }

        public async Task<IEnumerable<T>> GetAll()
        {
            return await _dbContext.Set<T>().ToListAsync();
        }

        public async Task Add(T entity)
        {
            await _dbContext.Set<T>().AddAsync(entity);
        }

        public void Delete(T entity)
        {
            _dbContext.Set<T>().Remove(entity);
        }

        public void Update(T entity)
        {
            _dbContext.Set<T>().Update(entity);
        }
    }
}