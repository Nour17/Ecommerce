using System.Threading.Tasks;
using Ecommerce.API.Models;

namespace Ecommerce.API.Data.Repositories.Interfaces
{
    public interface IAuthRepository
    {
         Task<User> Register(User user, string password);

         Task<User> Login(string username, string password);

         Task<bool> UserExists(string username);
    }
}