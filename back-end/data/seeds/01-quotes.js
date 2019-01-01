exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("quotes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("quotes").insert([
        // {id: 1, colName: 'rowValue1'},
        // {id: 2, colName: 'rowValue2'},
        // {id: 3, colName: 'rowValue3'}
        {
          textBody:
            "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us",
          author: "-Helen Keller"
        },
        {
          textBody:
            "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do",
          author: "-Mark Twain"
        },
        {
          textBody:
            "It is hard to fail, but it is worse never to have tried to succeed",
          author: "-Theodore Roosevelt"
        },
        {
          textBody:
            "I’m a success today because I had a friend who believed in me and I didn’t have the heart to let him down",
          author: "-Abraham Lincoln"
        },
        {
          textBody:
            "Only put off until tomorrow what you are willing to die having left undone",
          author: "-Pablo Picasso"
        },
        {
          textBody:
            "If you want to live a happy life, tie it to a goal, not to people or things",
          author: "-Albert Einstein"
        },
        {
          textBody:
            "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world",
          author: "-Harriet Tubman"
        },
        {
          textBody:
            "Never let the fear of striking out keep you from playing the game",
          author: "-Babe Ruth"
        },
        {
          textBody:
            "Success is not final, failure is not fatal: it is the courage to continue that counts",
          author: "-Winston Churchill"
        },
        {
          textBody:
            "The successful warrior is the average man, with laser-like focus",
          author: "-Bruce Lee"
        }
      ]);
    });
};
