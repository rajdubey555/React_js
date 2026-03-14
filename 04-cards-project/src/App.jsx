import React from 'react'
import Card from './components/Card'

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      company: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      company: "Apple",
      datePosted: "2 weeks ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$50/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      company: "Amazon",
      datePosted: "3 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://www.bing.com/th/id/OIP.lQ9JvL9Rxhx_s-VKQNEidgHaEK?w=305&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      company: "Meta",
      datePosted: "1 week ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$60/hr",
      location: "Remote"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      company: "Netflix",
      datePosted: "10 days ago",
      post: "UI Engineer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Los Angeles, USA"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      company: "Microsoft",
      datePosted: "4 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$48/hr",
      location: "Noida, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
      company: "Tesla",
      datePosted: "6 days ago",
      post: "Software Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hr",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg",
      company: "Adobe",
      datePosted: "3 weeks ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$52/hr",
      location: "San Jose, USA"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
      company: "Uber",
      datePosted: "8 days ago",
      post: "React Native Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$42/hr",
      location: "Pune, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
      company: "Airbnb",
      datePosted: "2 days ago",
      post: "Product Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "San Francisco, USA"
    }
  ];

  return (
    <div className='parent'>
      {jobOpenings.map((jobs, idx) => {
        return <div key={idx}>
          <Card
            logo={jobs.brandLogo}
            company={jobs.company}
            date={jobs.datePosted}
            post={jobs.post}
            time={jobs.tag1}
            position={jobs.tag2}
            pay={jobs.pay}
            location={jobs.location}
          />
        </div>
      })}
    </div>
  )
}

export default App
