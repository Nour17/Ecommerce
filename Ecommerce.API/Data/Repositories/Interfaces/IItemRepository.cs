using System.Collections.Generic;
using System.Threading.Tasks;
using Ecommerce.API.Models;

namespace Ecommerce.API.Data.Repositories.Interfaces
{
    public interface IItemRepository
    {
        Task<IEnumerable<Item>> GetItems();

        void AddItem<T>(T entity) where T: class;

        Task<Item> GetItem(int Id);

        void DeleteItem<T>(T entity) where T: class;

        Task<bool> SaveAll();
    }
}