import React from "react";
import { FaUser, FaStar, FaQuoteLeft, FaQuoteRight, FaComments } from "react-icons/fa";
import { motion } from "framer-motion";
const reviews = [
    {
        username: "Aman Panwar",
        internshipName: "Web Development",
        review: "Great experience! Learned a lot about React and Node.js.",
        rating: 5
    },
    {
        username: "John Doe",
        internshipName: "UI/UX Design",
        review: "Had a fantastic time working with an amazing team!",
        rating: 4
    },
    {
        username: "Jane Smith",
        internshipName: "App Development",
        review: "Gained deep insights into API development.",
        rating: 5
    },
    {
        username: "Alice Johnson",
        internshipName: "Data Analyst",
        review: "Exciting projects and great mentors!",
        rating: 4
    },
    {
        username: "Michael Brown",
        internshipName: "Cybersecurity Analyst at SecureNet", // No direct match, kept original
        review: "Hands-on experience with real-world security threats.",
        rating: 5
    },
    {
        username: "Sophia Wilson",
        internshipName: "Digital Marketing",
        review: "Learned about digital marketing and branding strategies!",
        rating: 4
    }
];


export default function InternshipReview() {
    return (
        <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.95, skewY: 5 }} 
        whileInView={{ opacity: 1, y: 0, scale: 1, skewY: 0 }} 
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false }} // Ensures animation runs every time it's in view
        className="bg-gray-200 p-10 rounded-lg shadow-xl w-[80%] mx-auto flex flex-col items-center text-gray-900 
            border-2 border-blue-400 relative overflow-hidden before:absolute before:inset-0 before:border-[3px] 
            before:border-blue-400 before:animate-pulse before:opacity-40 before:blur-lg"
    > {/*text part*/}
        <motion.h2
    initial={{ opacity: 0, scale: 0.8, rotateX: -30 }}
    whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: false }}
    className="text-3xl font-extrabold mb-4 text-center text-gray-800 relative z-10 flex items-center justify-center gap-3"
>
    <motion.span
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
    >
        🌟
    </motion.span>
    What Our Past Interns Say About Their Experience
    <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
    >
        🌟
    </motion.span>
</motion.h2>

<motion.p
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
    viewport={{ once: false }}
    className="text-lg text-gray-600 mb-8 text-center max-w-2xl relative z-10"
>
    <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        className="inline-block text-blue-500 text-2xl"
    >
        💬
    </motion.span>{" "}
    Hear from our past interns about how their internships helped them grow and gain valuable skills in the industry.{" "}
    <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        className="inline-block text-blue-500 text-2xl"
    >
        📈
    </motion.span>
</motion.p>

{/*card layout*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {reviews.map((review, index) => {
                let animationProps = { opacity: 0, scale: 0.9 };
                
                // Left, Center, Right logic
                if (index % 3 === 0) animationProps.x = -50; // Leftmost cards
                else if (index % 3 === 2) animationProps.x = 50; // Rightmost cards
                else animationProps.y = 50; // Center card
    
                return (
                    <motion.div 
                        key={index} 
                        initial={animationProps} 
                        whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }} 
                        transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                        viewport={{ once: false }} // Animation triggers every time it's in view
                        className="bg-white shadow-lg rounded-2xl p-6 border border-gray-300 flex flex-col items-center 
                            text-gray-900 hover:shadow-2xl transition duration-300 transform hover:scale-105"
                    >
                        <FaUser className="text-blue-500 text-4xl mb-3" />
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
