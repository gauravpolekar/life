import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCalendarAlt, FaHeart, FaRing, FaGift, FaBaby, FaBabyCarriage, FaUsers } from "react-icons/fa";

const timelineData = [
  { 
    date: "20/05/1992", 
    event: "Gaurav's Birthday", 
    icon: <FaBaby size={20} />, 
    images: ["img/Gaurav1992.jpg"]
  },
  { 
    date: "11/06/1996", 
    event: "Chetali's Birthday", 
    icon: <FaBabyCarriage size={20} />, 
    images: ["img/Chetu1996.jpg"]
  },
  { 
    date: "11/08/2018", 
    event: "Marraige Biodata", 
    icon: <FaHeart size={20} />, 
    images: ["/images/first_date1.jpg", "/images/first_date2.jpg", "/images/first_date3.jpg", "/images/first_date4.jpg"]
  },
  { 
    date: "14/02/2020", 
    event: "First Date", 
    icon: <FaUsers size={20} />, 
    images: ["/images/first_date1.jpg", "/images/first_date2.jpg", "/images/first_date3.jpg", "/images/first_date4.jpg"]
  },
  { 
    date: "30/03/2022", 
    event: "Engagement", 
    icon: <FaRing size={20} />, 
    images: ["/images/engagement1.jpg", "/images/engagement2.jpg", "/images/engagement3.jpg", "/images/engagement4.jpg"]
  },
  { 
    date: "31/03/2022", 
    event: "Marriage", 
    icon: <FaGift size={20} />, 
    images: ["/images/marriage1.jpg", "/images/marriage2.jpg", "/images/marriage3.jpg", "/images/marriage4.jpg"]
  }
];

const getDateDifference = (date1, date2) => {
  const d1 = new Date(date1.split("/").reverse().join("-"));
  const d2 = new Date(date2.split("/").reverse().join("-"));
  return Math.abs(d2 - d1) / (1000 * 60 * 60 * 24 * 365); // Difference in years
};

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="text-center" style={{ height: "100vh", width: "100vw", overflowY: "auto", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#121212", color: "#ffffff" }}>
      <h1 className="text-light mt-3">Gaurav & Chetali </h1>
      
      <div className="mt-3">
        <div className="timeline-container d-flex flex-column align-items-center position-relative" style={{ width: "100%", scrollBehavior: "smooth" }}>
          {timelineData.map((item, index) => {
            const nextDate = timelineData[index + 1]?.date;
            const dateGap = nextDate ? getDateDifference(item.date, nextDate) : 0;
            const marginHeight = dateGap > 1 ? dateGap * 30 + 50 : 50; // Adjust spacing based on year difference
            
            return (
              <div key={index} className="d-flex flex-column align-items-center position-relative mb-4" style={{ width: "300px" }}>
                <div className="timeline-item d-flex flex-column align-items-center position-relative" style={{ width: "100%" }}>
                  <div className="timeline-icon text-white p-2 rounded-circle d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px", backgroundColor: "#dc3545" }}>
                    {item.icon || <FaCalendarAlt size={20} />}
                  </div>
                  <div className="timeline-content p-3 border rounded text-center mt-2" style={{ backgroundColor: "#1e1e1e", color: "#ffffff", width: "100%" }}>
                    <strong>{item.date}</strong>
                    <p className="mb-2">{item.event}</p>
                  </div>
                </div>
                <div className="timeline-images mt-3 d-flex flex-wrap justify-content-center gap-2" style={{ padding: "10px", width: "100%" }}>
                  {item.images.map((img, imgIndex) => (
                    <img 
                      key={imgIndex} 
                      src={img} 
                      alt={item.event} 
                      className="img-fluid rounded" 
                      style={{ width: "80px", height: "80px", objectFit: "cover", cursor: "pointer" }}
                      onClick={() => setSelectedImage(img)}
                    />
                  ))}
                </div>
                {index < timelineData.length - 1 && (
                  <div className="timeline-line" style={{ height: `${marginHeight}px`, width: "4px", backgroundColor: "#007bff", marginTop: "10px" }}></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      {selectedImage && (
        <div className="image-popup position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }} onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Selected" className="rounded" style={{ maxWidth: "80%", maxHeight: "80%" }} />
        </div>
      )}
    </div>
  );
};

export default App;
