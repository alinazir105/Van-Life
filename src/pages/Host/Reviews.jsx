import React from "react"
import { BsStarFill } from "react-icons/bs"
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    LabelList
} from "recharts"

export default function Reviews() {
    const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            date: "January 3, 2023",
            text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
            id: "1",
        },
        {
            rating: 5,
            name: "Sandy",
            date: "December 12, 2022",
            text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
            id: "2",
        },
        {
            rating: 4,
            name: "Mandy",
            date: "December 12, 2022",
            text: "This is the first time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
            id: "3",
        }
    ]

    // Count ratings
    const ratingCounts = [5, 4, 3, 2, 1].map(star => {
        const count = reviewsData.filter(r => r.rating === star).length
        const percentage = Math.round((count / reviewsData.length) * 100)
        return { star, count, percentage }
    })

    return (
        <section className="host-reviews">
            <div className="top-text">
                <h2>Your reviews</h2>
                <p>
                    Last <span>30 days</span>
                </p>
            </div>

            {/* Bar Graph */}
            <div style={{ width: "100%", height: 200 }}>
                <ResponsiveContainer>
                    <BarChart
                        layout="vertical"
                        data={ratingCounts}
                        margin={{ left: 50, right: 30 }}
                    >
                        <XAxis type="number" hide />
                        <YAxis
                            type="category"
                            dataKey="star"
                            tickFormatter={star => `${star} star${star > 1 ? "s" : ""}`}
                        />
                        <Tooltip formatter={(value) => `${value}%`} />
                        <Bar dataKey="percentage" fill="#FF8C38">
                            <LabelList dataKey="percentage" position="right" formatter={(val) => `${val}%`} />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <h3>Reviews ({reviewsData.length})</h3>
            {reviewsData.map((review) => (
                <div key={review.id}>
                    <div className="review">
                        {[...Array(review.rating)].map((_, i) => (
                            <BsStarFill className="review-star" key={i} />
                        ))}
                        <div className="info">
                            <p className="name">{review.name}</p>
                            <p className="date">{review.date}</p>
                        </div>
                        <p>{review.text}</p>
                    </div>
                    <hr />
                </div>
            ))}
        </section>
    )
}
