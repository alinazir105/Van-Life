import React from "react"
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
    Cell
} from "recharts"

export default function Income() {
    const transactionsData = [
        { amount: 720, date: "Jan 3, '23", id: "1" },
        { amount: 560, date: "Dec 12, '22", id: "2" },
        { amount: 980, date: "Dec 3, '22", id: "3" },
    ]

    const incomeData = [
        { month: "Ju", income: 4800 },
        { month: "Au", income: 1500 },
        { month: "Se", income: 3000 },
        { month: "Oc", income: 2900 },
        { month: "No", income: 1800 },
        { month: "De", income: 700 },
    ]

    const barColors = [
        "#FFEDD5", "#FED7AA", "#FDBA74", "#FB923C", "#F97316", "#EA580C"
    ]

    return (
        <section className="host-income">
            <h1>Income</h1>
            <p>
                Last <span>30 days</span>
            </p>
            <h2>$2,260</h2>

            {/* Income Bar Chart */}
            <div style={{ width: "100%", height: 200 }}>
                <ResponsiveContainer>
                    <BarChart data={incomeData}>
                        <XAxis dataKey="month" />
                        <YAxis tickFormatter={val => `$${val / 1000}k`} />
                        <Tooltip formatter={(value) => `$${value}`} />
                        <Bar dataKey="income">
                            {incomeData.map((entry, index) => (
                                <Cell key={index} fill={barColors[index % barColors.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Transactions */}
            <div className="info-header">
                <h3>Your transactions ({transactionsData.length})</h3>
                <p>
                    Last <span>30 days</span>
                </p>
            </div>
            <div className="transactions">
                {transactionsData.map((item) => (
                    <div key={item.id} className="transaction">
                        <h3>${item.amount}</h3>
                        <p>{item.date}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
