exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("traveler")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("traveler").insert([
        {
          id: 1,
          name: "Ackers",
          email: "acker@blah.com",
          username: "ack",
          password: "test",
          bio: "I am a human person"
        },
        {
          id: 2,
          name: "Aaron",
          email: "ayayron@blah.com",
          username: "ayayron",
          password: "test1",
          bio: "I am a human person with corona virus"
        },
        {
          id: 3,
          name: "Emily",
          email: "em@blah.com",
          username: "em",
          password: "test2",
          bio: "I exist"
        },
        {
          id: 4,
          name: "Anna",
          email: "bamf@blah.com",
          username: "bamf",
          password: "test3",
          bio: "I am also a person"
        },
        {
          id: 5,
          name: "Maddocks",
          email: "zac@blah.com",
          username: "maddocks",
          password: "test4",
          bio: "I am Zac Efron"
        },
        {
          id: 6,
          name: "Kai",
          email: "kai@blah.com",
          username: "kai",
          password: "test5",
          bio: "I am broke"
        },
        {
          id: 7,
          name: "Vanessa",
          email: "ness@blah.com",
          username: "ness",
          password: "test6",
          bio: "I am me"
        },
        {
          id: 8,
          name: "Dustin",
          email: "dustbin@blah.com",
          username: "dustin",
          password: "test7",
          bio: "I am a javascript genius"
        }
      ]);
    });
};
