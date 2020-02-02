exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("posts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("posts").insert([
        {
          id: 1,
          title: "picture of thing1",
          photo: "https://source.unsplash.com/random",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 1
        },
        {
          id: 2,
          title: "picture of thing2",
          photo: "https://source.unsplash.com/random",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 1
        },
        {
          id: 3,
          title: "picture of thing3",
          photo: "https://source.unsplash.com/random",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 2
        },
        {
          id: 4,
          title: "picture of thing4",
          photo: "https://source.unsplash.com/random",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 2
        },
        {
          id: 5,
          title: "picture of thing5",
          photo: "https://source.unsplash.com/random",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 2
        },
        {
          id: 6,
          title: "picture of thing6",
          photo: "https://source.unsplash.com/random",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 3
        },
        {
          id: 7,
          title: "picture of thing7",
          photo: "https://source.unsplash.com/random",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 3
        },
        {
          id: 8,
          title: "picture of thing8",
          photo: "https://source.unsplash.com/random",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 4
        },
        {
          id: 9,
          title: "picture of thing9",
          photo: "https://source.unsplash.com/random",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 4
        },
        {
          id: 10,
          title: "picture of thing10",
          photo: "https://source.unsplash.com/random",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 5
        },
        {
          id: 11,
          title: "picture of thing11",
          photo: "https://source.unsplash.com/random",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 5
        },
        {
          id: 12,
          title: "picture of thing12",
          photo: "https://source.unsplash.com/random",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 6
        },
        {
          id: 13,
          title: "picture of thing13",
          photo: "https://source.unsplash.com/random",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 6
        },
        {
          id: 14,
          title: "picture of thing14",
          photo: "https://source.unsplash.com/random",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 6
        },
        {
          id: 15,
          title: "picture of thing15",
          photo: "https://source.unsplash.com/random",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 7
        },
        {
          id: 16,
          title: "picture of thing16",
          photo: "https://source.unsplash.com/random",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 7
        },
        {
          id: 17,
          title: "picture of thing17",
          photo: "https://source.unsplash.com/random",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 7
        },
        {
          id: 18,
          title: "picture of thing18",
          photo: "https://source.unsplash.com/random",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 8
        },
        {
          id: 19,
          title: "picture of thing19",
          photo: "https://source.unsplash.com/random",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 8
        }
      ]);
    });
};
