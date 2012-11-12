var _movies = new WinJS.Binding.List([
    { title: "Cars", synopsis: "A hot-shot race-car named Lightning McQueen gets waylaid in Radiator Springs, where he finds the true meaning of friendship and family.", type: "Family" },
    { title: "Incredibles", synopsis: "A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world.", type: "Family" },
    { title: "A Few Good Men", synopsis: "Neo military lawyer Kaffee defends Marines accused of murder; they contend they were acting under orders.", type: "Drama" },
    { title: "The Matrix", synopsis: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers. ", type: "Action" },
    { title: "So I Married an Axe Murderer", synopsis: "A San Francisco poet who fears commitment has a girlfriend who he suspects may not be who she appears. ", type: "Comedy" },
    { title: "Ocean's Eleven", synopsis: "Danny Ocean and his eleven accomplices plan to rob three Las Vegas casinos simultaneously.", type: "Drama" },
    { title: "The Empire Strikes Back", synopsis: "As Luke trains with Master Yoda to become a Jedi, his friends evade the Imperial fleet under the command of Darth Vader who is obsessed with turning Skywalker to the Dark Side.", type: "Sci-Fi" },
    { title: "Batman Begins", synopsis: "Bruce Wayne loses his philanthropic parents to a senseless crime, and years later becomes the Batman to save the crime-ridden Gotham City on the verge of destruction by an ancient order.", type: "Action" },
    { title: "Inception", synopsis: "In a world where technology exists to enter the human mind through dream invasion, a highly skilled thief is given a final chance at redemption which involves executing his toughest job to date: Inception.", type: "Action" },
    { title: "Catch Me If You Can", synopsis: "A true story about Frank Abagnale Jr. who, before his 19th birthday, successfully conned millions of dollars worth of checks as a Pan Am pilot, doctor, and legal prosecutor.", type: "Drama" },
    { title: "That Thing You Do!", synopsis: "A Pennsylvania band scores a hit in 1964 and rides the star-making machinery as long as it can, with lots of help from its manager.", type: "Comedy" },
    { title: "Remember the Titans", synopsis: "The true story of a newly appointed African-American coach and his high school team on their first season as a racially integrated unit.", type: "Drama" }
]);

WinJS.Namespace.define("Application.Data.movies", { "noSort": _movies });

var _moviesSortedByTitle = _movies.createSorted(function (l, r) {
    var
        lt = stripLeadingWords(l.title),
        rt = stripLeadingWords(r.title);

    return lt > rt;
});

function stripLeadingWords(str) {
    var returnValue = "";

    if (str.substring(0, 3).toLowerCase() == "the") {
        returnValue = str.substring(4, 5);
    } else if (str.substring(0, 2).toLowerCase() == "a ") {
        returnValue = str.substring(2, 3);
    } else {
        returnValue = str.substring(0, 1);
    }

    return returnValue.toLowerCase();
}

WinJS.Namespace.define("Application.Data.movies", { "sortedByTitle": _moviesSortedByTitle });

var _moviesSortedByType = _movies.createSorted(function (l, r) {
    return l.type > r.type;
});

WinJS.Namespace.define("Application.Data.movies", { "sortedByType": _moviesSortedByType });
