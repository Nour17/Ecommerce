using System.Collections.Generic;
using System.Threading.Tasks;
using Ecommerce.API.Data.Repositories.Interfaces;
using Ecommerce.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Ecommerce.API.Data.Repositories.Implementations
{
    public class ItemRepository : IItemRepository
    {
        private readonly DataContext _context;

        public ItemRepository(DataContext context)
        {
            _context = context;
        }

        public void AddItem<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void DeleteItem<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<Item> GetItem(int Id)
        {
            var item = await _context.Items.Include(p => p.Photos).FirstOrDefaultAsync(x => x.Id == Id);
            return item;
        }

        public async Task<IEnumerable<Item>> GetItems()
        {
            var items = await _context.Items.Include(p => p.Photos).ToListAsync();
            return items;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}