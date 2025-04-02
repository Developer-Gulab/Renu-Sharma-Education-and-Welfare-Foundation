import React from "react";
import { FaStar, FaQuoteLeft, FaQuoteRight, FaComments } from "react-icons/fa";
import { motion } from "framer-motion";

const reviews = [
    {
        username: "Aman Panwar",
        internshipName: "Web Development",
        review: "Great experience! Learned a lot about React and Node.js.",
        rating: 5,
        image: "https://img.freepik.com/free-photo/close-up-photo-young-successful-business-man-black-suit_171337-9509.jpg?ga=GA1.1.1675882604.1742791663&semt=ais_hybrid"
    },
    {
        username: "John Doe",
        internshipName: "UI/UX Design",
        review: "Had a fantastic time working with an amazing team!",
        rating: 4,
        image: "https://img.freepik.com/free-photo/business-man-front-office-building_23-2148018576.jpg?ga=GA1.1.1675882604.1742791663&semt=ais_hybrid"
    },
    {
        username: "Jane Smith",
        internshipName: "App Development",
        review: "Gained deep insights into API development.",
        rating: 5,
        image: "https://img.freepik.com/free-photo/elegant-man-with-folded-arms_1262-727.jpg?ga=GA1.1.1675882604.1742791663&semt=ais_hybrid"
    },
    {
        username: "Alice Johnson",
        internshipName: "Data Analyst",
        review: "Exciting projects and great mentors!",
        rating: 4,
        image: "https://img.freepik.com/free-photo/portrait-confident-businessman_107420-74362.jpg?ga=GA1.1.1675882604.1742791663&semt=ais_hybrid"
    },
    {
        username: "Michael Brown",
        internshipName: "Cybersecurity Analyst",
        review: "Hands-on experience with real-world security threats.",
        rating: 5,
        image: "https://img.freepik.com/free-photo/indian-businessman-with-his-white-car_496169-2889.jpg?ga=GA1.1.1675882604.1742791663&semt=ais_hybrid"
    },
    {
        username: "Sophia Wilson",
        internshipName: "Digital Marketing",
        review: "Learned about digital marketing and branding strategies!",
        rating: 4,
        image: "https://img.freepik.com/free-photo/businessman-with-crossed-arms_23-2147996582.jpg?ga=GA1.1.1675882604.1742791663&semt=ais_hybrid"
    }
];

export default function InternshipReview() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95, skewY: 5 }} 
            whileInView={{ opacity: 1, y: 0, scale: 1, skewY: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false }}
            className="bg-gradient-to-r from-gray-900 via-gray-800 to-[#001f3f]-400  p-10 
            rounded-lg shadow-xl w-[100%] mx-auto flex flex-col items-center text-gray-900  "
        >
            
            {/* Heading */}
            <motion.h2
    initial={{ opacity: 0, scale: 0.8, rotateX: -30 }}
    whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: false }}
    className="text-3xl font-extrabold mb-4 text-center text-white flex items-center justify-center gap-3"
>
    🌟 What Our Past Interns Say About Their Experience 🌟
</motion.h2>

<motion.p
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
    viewport={{ once: false }}
    className="text-lg text-gray-300 mb-8 text-center max-w-2xl relative z-10"
>
    <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        className="inline-block text-blue-400 text-2xl"
    >
        💬
    </motion.span>{" "}
    Hear from our past interns about how their internships helped them grow and gain valuable skills in the industry.{" "}
    <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        className="inline-block text-blue-400 text-2xl"
    >
        📈
    </motion.span>
</motion.p>


            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {reviews.map((review, index) => {
                    let animationProps = { opacity: 0, scale: 0.9 };
                    if (index % 3 === 0) animationProps.x = -50;
                    else if (index % 3 === 2) animationProps.x = 50;
                    else animationProps.y = 50;

                    return (
                        <motion.div 
                            key={index} 
                            initial={animationProps} 
                            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }} 
                            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                            viewport={{ once: false }}
                            className="bg-white shadow-lg rounded-2xl i p-6 border border-gray-300 flex flex-col items-center text-gray-900 hover:shadow-2xl transition duration-300 transform hover:scale-105"
                        >
                           <img 
    src={review.image} 
    alt={review.username} 
    className="w-32 h-32 rounded-full object-cover border-4 border-blue-400 mb-4"
/>
                            <h3 className="text-lg font-semibold text-center text-gray-800">{review.internshipName}</h3>
                            <p className="text-gray-600 text-sm">by {review.username}</p>
                            <p className="mt-2 text-gray-700 text-center flex items-center">
                                <FaQuoteLeft className="text-gray-400 mr-2" />
                                {review.review}
                                <FaQuoteRight className="text-gray-400 ml-2" />
                            </p>
                            <p className="mt-2 text-yellow-500 font-bold flex items-center">
                                Rating: {[...Array(review.rating)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-500" />
                                ))}
                            </p>
                            <FaComments className="text-gray-400 text-2xl mt-4" />
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
}
