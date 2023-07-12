using Beckend.DAL.IRepositories;
using System;

namespace Beckend.DAL.UOW
{
    /// <summary>
    /// This interface will kepp the repository
    /// </summary>
    public interface IUnitOfWork : IDisposable
    {

        IRequestRepository Requests { get; }

        int Save();

    }
}

