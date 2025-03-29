import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCalendarAlt, FaHeart, FaRing, FaGift, FaCarAlt, FaFile ,FaBirthdayCake ,FaBaby, FaBabyCarriage, FaUsers, FaBiking, FaPlaneDeparture, FaHome, FaHollyBerry, FaBath, FaHandshake, FaHandHoldingHeart, FaBus, FaUserFriends, FaPlane, FaMapMarkedAlt, FaMotorcycle, FaCar, FaMountain, FaTrain, FaCameraRetro, FaLock, FaUserLock, FaMoon, FaTrophy, FaGifts, FaAward, FaRegCalendar, FaFire } from "react-icons/fa";
import { GiMeditation, GiTank } from "react-icons/gi";
import { RiEBikeFill } from "react-icons/ri";

const timelineData = [
  { 
    date: "20/05/1992", 
    event: "Gaurav's Birthday", 
    icon: <FaBaby size={20} />, 
    images: ["images/Gaurav1992.jpg"]
  },
  { 
    date: "11/06/1996", 
    event: "Chetali's Birthday", 
    icon: <FaBabyCarriage size={20} />, 
    images: ["images/Chetu1996.jpg"]
  },
  { 
    date: "20/08/2018", 
    event: "Marraige Biodata", 
    icon: <FaFile size={20} />, 
    images: ["images/bioData.jpg","images/bioData1.jpg", "images/bioData2.jpg", "images/bioData3.jpg"]
  },
  { 
    date: "10/09/2018", 
    event: "First time meet and marraige fixed", 
    icon: <FaRing size={20} />, 
    images: ["images/first_date1.jpg", "images/first_date2.jpg", "images/first_date3.jpg", "images/first_date4.jpg"]
  },
  { 
    date: "19/10/2018", 
    event: "Gaurav visited Maheshwar", 
    icon: <FaHandshake size={20} />, 
    images: ["images/maheshwar1.jpg", "images/maheshwar1_1.jpg", "images/maheshwar1_2.jpg"]
  },
  { 
    date: "09/11/2018", 
    event: "Chetali proposed Gaurav at Chnadwad", 
    icon: <FaRing size={20} />, 
    images: ["images/proposed.jpg", "images/proposed1.jpg", "images/proposed2.jpg", "images/proposed3.jpg"]
  },
  { 
    date: "20/01/2019", 
    event: "Next meet in Maheshwar", 
    icon: <FaHandshake size={20} />, 
    images: ["images/maheshwar2_1.jpg"]
  },
  { 
    date: "20/01/2019", 
    event: "Bhopal trip", 
    icon: <FaBus size={20} />, 
    images: ["images/bhopal1.jpg", "images/bhopal2.jpg", "images/bhopal3.jpg", "images/bhopal4.jpg", "images/bhopal5.jpg", "images/bhopal6.jpg"]
  },
  { 
    date: "16/02/2019", 
    event: "Pre wedding shoot", 
    icon: <FaHandHoldingHeart size={20} />, 
    images: ["images/preWedding.jpg", "images/preWedding1.jpg", "images/preWedding2.webp", "images/preWedding3.jpg", "images/preWedding4.jpg", "images/preWedding5.jpg" , "images/preWedding6.webp" , "images/preWedding7.jpg" ]
  },
  { 
    date: "31/03/2019", 
    event: "Engahement", 
    icon: <FaRing size={20} />, 
    images: ["images/engahement.jpg", "images/engahement1.webp", "images/engahement2.webp"]
  },
  { 
    date: "31/03/2019", 
    event: "Got married", 
    icon: <FaUserFriends size={20} />, 
    images: ["images/marriage1.jpg", "images/marriage2.webp", "images/marriage2.jpg"]
  },
  { 
    date: "05/04/2019", 
    event: "Manali trip", 
    icon: <FaPlane size={20} />, 
    images: ["images/manali.jpg", "images/manali1.jpg", "images/manali2.jpg", "images/manali3.jpg",
    "images/manali4.jpg", "images/manali5.jpg", "images/manali6.jpg", "images/manali7.jpg",
    "images/manali8.jpg", "images/manali9.jpg", "images/manali10.jpg", "images/manali11.jpg",
    "images/manali12.jpg", "images/manali13.jpg", "images/manali14.jpg", "images/manali15.jpg"
  ]
  },
  { 
    date: "20/05/2019", 
    event: "Gaurav's 27th birthday", 
    icon: <FaGift size={20} />, 
    images: ["images/gp27.jpg", "images/gp271.jpg", "images/gp272.jpg", "images/gp273.jpg"]
  },
  { 
    date: "11/06/2019", 
    event: "Chetali's 23rd birthday", 
    icon: <FaGift size={20} />, 
    images: ["images/chetu23.webp"]
  },
  { 
    date: "04/08/2019", 
    event: "Taljai trip", 
    icon: <FaMapMarkedAlt size={20} />, 
    images: ["images/taljai.jpg", "images/taljai1.jpg"]
  },
  { 
    date: "17/08/2019", 
    event: "Mandav trip", 
    icon: <FaMotorcycle size={20} />, 
    images: ["images/mandav.jpg", "images/mandav1.jpg", "images/mandav2.jpg", "images/mandav3.jpg", "images/mandav3.jpg", "images/mandav5.gif"]
  },
  { 
    date: "25/08/2019", 
    event: "Jejuri trip", 
    icon: <FaCar size={20} />, 
    images: ["images/jejuri.jpg", "images/jejuri1.webp", "images/jejuri2.jpg"]
  },
  { 
    date: "29/10/2019", 
    event: "Chandreshwar", 
    icon: <FaMountain size={20} />, 
    images: ["images/Chandreshwar.jpg", "images/Chandreshwar1.webp", "images/Chandreshwar2.jpg", "images/Chandreshwar3.jpg"]
  },
  { 
    date: "09/11/2019", 
    event: "Pune Darshan", 
    icon: <FaMapMarkedAlt size={20} />, 
    images: ["images/puneDarshan.jpg", "images/puneDarshan1.jpg", "images/puneDarshan2.jpg", "images/puneDarshan3.jpg", "images/puneDarshan4.jpg"] 
  },
  { 
    date: "15/12/2019", 
    event: "Parvati trip", 
    icon: <FaMapMarkedAlt size={20} />, 
    images: ["images/Parvati.webp"]
  },
  { 
    date: "12/01/2020", 
    event: "Jalgaon", 
    icon: <FaTrain size={20} />, 
    images: ["images/Jalgaon.jpg", "images/Jalgaon1.jpg", "images/Jalgaon2.jpg"]
  },
  { 
    date: "13/01/2020", 
    event: "Post wedding shoot - Maheshwar", 
    icon: <FaCameraRetro size={20} />, 
    images: ["images/postWeddingShoot.jpg", "images/postWeddingShoot1.jpg", "images/postWeddingShoot2.jpg", "images/postWeddingShoot3.jpg"]
  },
  { 
    date: "31/01/2020", 
    event: "Pandhurna", 
    icon: <FaTrain size={20} />, 
    images: ["images/Pandhurna.webp"]
  },
  { 
    date: "01/02/2020", 
    event: "Shegaon trip", 
    icon: <FaBus size={20} />, 
    images: ["images/Shegaon.jpg"]
  },
  { 
    date: "14/04/2020", 
    event: "Sangamner", 
    icon: <FaBus size={20} />, 
    images: ["images/Sangamner.jpg"]
  },
  { 
    date: "31/03/2020", 
    event: "First wedding annivarsary - Lockdown", 
    icon: <FaLock size={20} />, 
    images: ["images/annivarsary.jpg"]
  },
  { 
    date: "20/05/2020", 
    event: "Gaurav's 28th birthday", 
    icon: <FaUserLock size={20} />, 
    images: ["images/gp28.jpg"]
  },
  { 
    date: "11/06/2020", 
    event: "Chetali's 24th birthday", 
    icon: <FaUserLock size={20} />, 
    images: ["images/chetu24.jpg"]
  },
  { 
    date: "04/11/2020", 
    event: "Karva chauth", 
    icon: <FaMoon size={20} />, 
    images: ["images/Karva1.jpg"]
  },
  { 
    date: "13/12/2020", 
    event: "Maheshwar", 
    icon: <FaBus size={20} />, 
    images: ["images/Maheshwar3.jpg"]
  },
  { 
    date: "06/01/2021", 
    event: "Nashik", 
    icon: <FaMotorcycle size={20} />, 
    images: ["images/Nashik.jpg"]
  },
  { 
    date: "14/02/2021", 
    event: "Valentines day", 
    icon: <FaHeart size={20} />, 
    images: ["images/IMG_20210214_183144396.jpg", "IMG_20210214_173817435.webp"]
  },
  { 
    date: "31/03/2021", 
    event: "Second wedding annivarsary", 
    icon: <FaHeart size={20} />, 
    images: ["images/Nashik1.jpg", "images/Nashik2.jpg", "images/Nashik3.jpg",
    "images/Nashik4.jpg", "images/Nashik5.jpg", "images/Nashik6.jpg", "images/Nashik7.jpg"]
  },
  { 
    date: "06/11/2021", 
    event: "Pune for Chetali's first job", 
    icon: <FaPlaneDeparture size={20} />, 
    images: ["images/job.jpg"]
  },
  { 
    date: "30/11/2021", 
    event: "Maheshwar", 
    icon: <FaBus size={20} />, 
    images: ["images/Maheshwar4.jpg", "images/Maheshwar41.jpg"]
  },
  { 
    date: "09/01/2022", 
    event: "Alandi trip", 
    icon: <FaMotorcycle size={20} />, 
    images: ["images/Alandi.jpg", "images/Alandi1.jpg"]
  },
  { 
    date: "25/01/2022", 
    event: "Movie 83", 
    icon: <FaTrophy size={20} />, 
    images: ["images/83.jpg", "images/831.jpg"]
  },
  { 
    date: "14/02/2022", 
    event: "Pune trip and celebration valentines day", 
    icon: <FaHeart size={20} />, 
    images: ["images/pune1.jpg", "images/pune3.jpg", "images/pune2.webp"]
  },
  { 
    date: "31/03/2022", 
    event: "Third wedding annivarsary at Teera", 
    icon: <FaHeart size={20} />, 
    images: ["images/Teera.jpg", "images/Teera1.webp", "images/Teera2.webp", "images/Teera3.jpg", "images/Teera4.jpg", "images/Teera5.webp"]
  },
  { 
    date: "20/05/2022", 
    event: "Gaurav's 29th birthday", 
    icon: <FaGifts size={20} />, 
    images: ["images/gp29.jpg"]
  },
  { 
    date: "11/06/2022", 
    event: "Chetali's  25th birthday", 
    icon: <FaGift size={20} />, 
    images: ["images/chetu25.jpg"]
  },
  { 
    date: "26/07/2022", 
    event: "Chetali got shining star award", 
    icon: <FaAward size={20} />, 
    images: ["images/shining.jpg"]
  },
  { 
    date: "11/09/2022", 
    event: "Maheshwar bhaiyu shadi", 
    icon: <FaBus size={20} />, 
    images: ["images/bhaiyu.jpg"]
  },
  { 
    date: "08/11/2022", 
    event: "Baby shower", 
    icon: <FaBabyCarriage size={20} />, 
    images: ["images/shower.jpg", "images/shower1.jpg"]
  },
  { 
    date: "30/11/2022", 
    event: "Upasna baby born", 
    icon: <FaBaby size={20} />, 
    images: ["images/Upasna.jpg", "images/Upasna1.jpg"]
  },
  { 
    date: "15/02/2023", 
    event: "Maheshwar Akshay shadi", 
    icon: <FaBus size={20} />, 
    images: ["images/Akshay.jpg", "images/Akshay1.jpg"]
  },
  { 
    date: "24/03/2023", 
    event: "Surat trip", 
    icon: <FaBus size={20} />, 
    images: ["images/Surat.jpg"]
  },
  { 
    date: "31/03/2023", 
    event: "Fourth wedding annivarsary", 
    icon: <FaHeart size={20} />, 
    images: ["images/annivarsary4.jpg", "images/annivarsary41.jpg", "images/annivarsary42.webp", "images/annivarsary43.webp"]
  },
  { 
    date: "20/05/2023", 
    event: "Gaurav's 30th birthday - Maheshwar", 
    icon: <FaBirthdayCake size={20} />, 
    images: ["images/gp30.jpg"]
  },
  { 
    date: "27/05/2023", 
    event: "Teritree date", 
    icon: <FaRegCalendar size={20} />, 
    images: ["images/Teritree.webp", "images/Teritree1.webp"]
  },
  { 
    date: "30/05/2023", 
    event: "Upasna 6th month birthday", 
    icon: <FaBirthdayCake size={20} />, 
    images: ["images/6th.jpg", "images/6th1.jpg"]
  },
  { 
    date: "11/06/2023", 
    event: "Chetali's 26th birthday ", 
    icon: <FaBirthdayCake size={20} />, 
    images: ["images/chetu26.jpg", "images/chetu261.jpg", "images/chetu262.jpg", "images/chetu263.jpg"]
  },
  { 
    date: "16/06/2023", 
    event: "Car", 
    icon: <FaCarAlt size={20} />, 
    images: ["images/car.webp"]
  },
  { 
    date: "11/07/2023", 
    event: "Krishna photo shoot", 
    icon: <FaBaby size={20} />, 
    images: ["images/Krishna.jpg", "images/Krishna1.jpg"]
  },
  { 
    date: "29/07/2023", 
    event: "Theur trip", 
    icon: <FaCarAlt size={20} />, 
    images: ["images/Theur.webp", "images/Theur1.webp"]
  },
  { 
    date: "24/09/2023", 
    event: "Ashram visit", 
    icon: <GiMeditation size={20} />, 
    images: ["images/ashram1.jpg", "images/ashram.jpg", "images/ashram.jpg"]
  },
  { 
    date: "02/11/2023", 
    event: "Karva chauth", 
    icon: <FaHollyBerry size={20} />, 
    images: ["images/karva23.jpg", "images/karva231.jpg"]
  },
  { 
    date: "12/11/2023", 
    event: "Diwali", 
    icon: <FaFire size={20} />, 
    images: ["images/diwali23.jpg"]
  },
  { 
    date: "30/11/2023", 
    event: "Upasna's first birthday", 
    icon: <FaBirthdayCake size={20} />, 
    images: ["images/Uppu1.jpg", "images/Uppu12.jpg", "images/Uppu13.jpg", "images/Uppu14.jpg"]
  },
  { 
    date: "07/12/2023", 
    event: "Jignesh shadi - Surat", 
    icon: <FaBus size={20} />, 
    images: ["images/Jignesh.jpg", "images/Jignesh1.jpg"]
  },
  { 
    date: "02/02/2024", 
    event: "War museum visit", 
    icon: <GiTank size={20} />, 
    images: ["images/museum.jpg", "images/museum1.jpg"]
  },
  { 
    date: "11/02/2024", 
    event: "Bor nahan", 
    icon: <FaBath size={20} />, 
    images: ["images/bor.jpg"]
  },
  { 
    date: "13/03/2024", 
    event: "Maheshwar", 
    icon: <FaBus size={20} />, 
    images: ["images/maheshwar5.jpg"]
  },
  { 
    date: "31/03/2024", 
    event: "Fifth wedding anniversay Indore", 
    icon: <FaHeart size={20} />, 
    images: ["images/anniversay5_1.jpg", "images/anniversay5_2.jpg", "images/anniversay5_3.jpg"]
  },
  { 
    date: "20/05/2024", 
    event: "Gaurav's 31st birthday", 
    icon: <FaBirthdayCake size={20} />, 
    images: ["images/gp31.jpg", "images/gp311.jpg"]
  },
  { 
    date: "11/06/2024", 
    event: "Chetali's 27th birthday - Chandwad", 
    icon: <FaBirthdayCake size={20} />, 
    images: ["images/chetu27.jpg"]
  },
  { 
    date: "03/08/2024", 
    event: "Jupiter", 
    icon: <FaBiking size={20} />, 
    images: ["images/Jupiter.jpg", "images/Jupiter1.jpg"]
  },
  { 
    date: "15/08/2024", 
    event: "Celebration", 
    icon: <FaGift size={20} />, 
    images: ["images/Celebration.jpg", "images/Celebration1.jpg", "images/Celebration2.jpg"]
  },
  { 
    date: "15/10/2024", 
    event: "Surprise from Chennai", 
    icon: <FaPlaneDeparture size={20} />, 
    images: ["images/Surprise.jpg", "images/Surprise1.jpg"]
  },
  { 
    date: "19/10/2024", 
    event: "Trip to Narayanpur", 
    icon: <RiEBikeFill size={20} />, 
    images: ["images/Narayanpur0.jpg", "images/Narayanpur.jpg", "images/Narayanpur1.jpg", "images/Narayanpur2.jpg",
    "images/Narayanpur3.jpg", "images/Narayanpur4.jpg"]
  },
  { 
    date: "20/10/2024", 
    event: "Karva chauth", 
    icon: <FaMoon size={20} />, 
    images: ["images/Karva24.jpg", "images/Karva241.jpg", "images/Karva242.jpg"]
  },
  { 
    date: "01/11/2024", 
    event: "Diwali", 
    icon: <FaHollyBerry size={20} />, 
    images: ["images/diwali24.jpg"]
  },
  { 
    date: "23/11/2024", 
    event: "Ramdara trip", 
    icon: <FaBiking size={20} />, 
    images: ["images/Ramdara.webp"]
  },
  { 
    date: "30/11/2024", 
    event: "Upasna's second birthday", 
    icon: <FaBirthdayCake size={20} />, 
    images: ["images/Uppu2.jpg", "images/Uppu21.jpg"]
  },
  { 
    date: "13/12/2024", 
    event: "Maheshwar", 
    icon: <FaBus size={20} />, 
    images: ["images/maheshwar6.webp"]
  },
  { 
    date: "22/12/2024", 
    event: "Sarasbag", 
    icon: <FaMotorcycle size={20} />, 
    images: ["images/Sarasbag.jpg"]
  },
  { 
    date: "20/01/2025", 
    event: "New house in Pune", 
    icon: <FaHome size={20} />, 
    images: ["images/house.jpg", "images/house1.jpg", "images/house2.jpg", "images/house3.jpg", "images/house4.jpg", "images/house5.jpg"]
  },
  { 
    date: "02/02/2025", 
    event: "Maheshwar", 
    icon: <FaBus size={20} />, 
    images: ["images/Maheshwar7.jpg"]
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
