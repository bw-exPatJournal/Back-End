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
          photo:
            "https://images.unsplash.com/photo-1579411291556-39366470e302?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 1
        },
        {
          id: 2,
          title: "picture of thing2",
          photo:
            "https://images.unsplash.com/photo-1578760914717-4b04250b46f9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 1
        },
        {
          id: 3,
          title: "picture of thing3",
          photo:
            "https://images.unsplash.com/photo-1578760914717-4b04250b46f9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 2
        },
        {
          id: 4,
          title: "picture of thing4",
          photo:
            "https://images.unsplash.com/photo-1580055216970-cf12e1b210ae?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 2
        },
        {
          id: 5,
          title: "picture of thing5",
          photo:
            "https://images.unsplash.com/photo-1579032320705-b5777e7b91ae?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 2
        },
        {
          id: 6,
          title: "picture of thing6",
          photo:
            "https://images.unsplash.com/photo-1579668921543-ffed3e9e33c2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 3
        },
        {
          id: 7,
          title: "picture of thing7",
          photo:
            "https://images.unsplash.com/photo-1580089999753-20754ff77b8d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 3
        },
        {
          id: 8,
          title: "picture of thing8",
          photo:
            "https://images.unsplash.com/photo-1580089999753-20754ff77b8d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 4
        },
        {
          id: 9,
          title: "picture of thing9",
          photo:
            "https://images.unsplash.com/photo-1579278229305-260d0f3aa831?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 4
        },
        {
          id: 10,
          title: "picture of thing10",
          photo:
            "https://images.unsplash.com/photo-1580909924261-36da0ad323ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjU0NjZ9&auto=format&fit=crop&w=1234&q=80",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 5
        },
        {
          id: 11,
          title: "picture of thing11",
          photo:
            "https://images.unsplash.com/photo-1580950803939-c925b005e6b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1233&q=80",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 5
        },
        {
          id: 12,
          title: "picture of thing12",
          photo:
            "https://images.unsplash.com/photo-1580960551660-a700d2c95639?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 6
        },
        {
          id: 13,
          title: "picture of thing13",
          photo:
            "https://images.unsplash.com/photo-1580987620537-21fc021b356d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 6
        },
        {
          id: 14,
          title: "picture of thing14",
          photo:
            "https://images.unsplash.com/photo-1580987620537-21fc021b356d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 6
        },
        {
          id: 15,
          title: "picture of thing15",
          photo:
            "https://images.unsplash.com/photo-1581015926788-aab888f77e29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 7
        },
        {
          id: 16,
          title: "picture of thing16",
          photo:
            "https://images.unsplash.com/photo-1580944026976-c0ef3f3fcdb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 7
        },
        {
          id: 17,
          title: "picture of thing17",
          photo:
            "https://images.unsplash.com/photo-1580800976748-2c98d21898b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 7
        },
        {
          id: 18,
          title: "picture of thing18",
          photo:
            "https://images.unsplash.com/photo-1581007649515-fe8e9c951ced?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjc5NjV9&auto=format&fit=crop&w=1234&q=80",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 8
        },
        {
          id: 19,
          title: "picture of thing19",
          photo:
            "https://images.unsplash.com/photo-1581008685504-7a71a2857ce3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80",
          story: "this is a story",
          details: "here are some details",
          traveler_id: 8
        }
      ]);
    });
};
