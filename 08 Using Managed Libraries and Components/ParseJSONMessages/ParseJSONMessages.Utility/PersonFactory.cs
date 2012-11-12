using System;
using Windows.Data.Json;

namespace ParseJSONMessages.Utility
{
    internal class PersonFactory
    {
        public static Person Create(JsonValue personValue)
        {
            Person person = new Person();

            JsonObject jsonData = personValue.GetObject();

            int id;
            IJsonValue idValue;

            if (jsonData.TryGetValue("id", out idValue))
            {
                if (idValue.ValueType == JsonValueType.String)
                {
                    if (int.TryParse(jsonData.GetNamedString("id"), out id))
                    {
                        person.Id = id;
                    }
                }
                else if (idValue.ValueType == JsonValueType.Number)
                {
                    if (int.TryParse(jsonData.GetNamedNumber("id").ToString(), out id))
                    {
                        person.Id = id;
                    }
                }
            }

            person.FirstName = jsonData.GetNamedString("firstName");
            person.LastName = jsonData.GetNamedString("lastName");

            return person;
        }

        public static Person Create(string jsonString)
        {
            JsonValue json;
            if (JsonValue.TryParse(jsonString, out json)) 
            {
                return PersonFactory.Create(json);
            }

            return new Person();
        }
    }
}
