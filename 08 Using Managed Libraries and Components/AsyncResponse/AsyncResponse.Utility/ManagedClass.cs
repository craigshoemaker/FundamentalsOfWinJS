using System;
using System.Threading.Tasks;
using Windows.Foundation;

namespace AsyncResponse.Utility
{
    public sealed class ManagedClass
    {
        // Don't use this approach!
        public string ResponseDirect(string message)
        {
            string returnValue = "You did not enter a message to return.";

            if (!string.IsNullOrEmpty(message))
            {
                returnValue = string.Format("Message from directly-run managed code method. Text from the user: '{0}'.", message);
            }

            return returnValue;
        }

        // Do use this approach!!
        public IAsyncOperation<string> ResponseAsync(string message)
        {
            return Task.Run<string>(async () =>
            {
                return await StartTask(message);
            }).AsAsyncOperation();
        }

        private Task<string> StartTask(string message)
        {
            return Task.Factory.StartNew<string>(() =>
            {
                return this.CreateMessage(message);
            });
        }

        private string CreateMessage(string message)
        {
            string returnValue = "You did not enter a message to return.";

            if (!string.IsNullOrEmpty(message))
            {
                returnValue = string.Format("Message from async method in managed code. User input: '{0}'.", message);
            }

            return returnValue;
        }
    }
}
