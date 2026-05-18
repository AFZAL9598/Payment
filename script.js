const videos = [
  {
    title: "Building a clean dashboard UI from scratch",
    channel: "Code Studio",
    views: "1.2M views",
    age: "2 days ago",
    duration: "14:22",
    initials: "CS",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Lo-fi beats for deep focus and late night work",
    channel: "Sound Room",
    views: "8.7M views",
    age: "1 month ago",
    duration: "2:03:11",
    initials: "SR",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "The future of phones: foldables, AI, and tiny cameras",
    channel: "Tech Today",
    views: "492K views",
    age: "5 hours ago",
    duration: "9:48",
    initials: "TT",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Street food tour: spicy snacks and fresh bread",
    channel: "Food Daily",
    views: "2.4M views",
    age: "3 weeks ago",
    duration: "18:05",
    initials: "FD",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Relaxing mountain cabin ambience with rain",
    channel: "Slow Living",
    views: "673K views",
    age: "7 days ago",
    duration: "1:12:40",
    initials: "SL",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "How creators plan, shoot, edit, and publish faster",
    channel: "Creator Lab",
    views: "310K views",
    age: "12 days ago",
    duration: "22:14",
    initials: "CL",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Championship highlights: last minute comeback",
    channel: "Match Center",
    views: "5.1M views",
    age: "18 hours ago",
    duration: "11:31",
    initials: "MC",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "JavaScript animations that make interfaces feel alive",
    channel: "Frontend Weekly",
    views: "875K views",
    age: "4 days ago",
    duration: "16:52",
    initials: "FW",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80"
  }
];

const grid = document.querySelector("#videoGrid");

grid.innerHTML = videos
  .map(
    (video) => `
      <article class="video-card">
        <a class="thumbnail" href="#" aria-label="${video.title}">
          <img src="${video.image}" alt="" loading="lazy" />
          <span class="duration">${video.duration}</span>
        </a>
        <div class="video-meta">
          <div class="channel-avatar">${video.initials}</div>
          <div>
            <h2 class="video-title">${video.title}</h2>
            <p class="video-byline">${video.channel}</p>
            <p class="video-stats">${video.views} • ${video.age}</p>
          </div>
        </div>
      </article>
    `
  )
  .join("");
