
namespace ParseJSONMessages.Utility
{
     /* JSON representation
     {
        "id" : ,
        "firstName" : "",
        "lastName" : ""
     }
     */
    internal class Person
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FullName
        {
            get 
            { 
                return string.Format("{0} {1}",this.FirstName,this.LastName); 
            }
        }

        public override string ToString()
        {
            return string.Format("Name: {0}, ID: {1}", this.FullName, this.Id);
        }
    }
}
