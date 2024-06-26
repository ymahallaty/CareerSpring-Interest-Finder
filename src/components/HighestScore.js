"use client";

import React from 'react'
import riasecStore from "../app/assessment/stores/riasecStore";
import {useSearchParams} from "next/navigation";

export default function HighestScore() {

    // const riasec = riasecStore(state => state.riasecArray);

    const searchParams = useSearchParams();
    const riasecString = searchParams.get('riasec');
    const riasec = riasecString.split(',').map(Number);

    const areas = ["Realistic", "Investigative", "Artistic", "Social", "Enterprising", "Conventional"];
    const scoredAreas = areas.map((area,index) => ({area, score: riasec[index]}));
    const topThreeScores = scoredAreas.sort((a,b) => b.score - a.score).slice(0,3);
    const topThreeAreas = topThreeScores.map(scoredArea => scoredArea.area);
    const TopThreeCode = topThreeScores.map(scoredArea => scoredArea.area.charAt(0)).join('');

    return (
        <p className="paragraph mb-0 font-sans">
            Congratulations! You&apos;ve scored highest in {topThreeAreas[0]}, {topThreeAreas[1]}, and {topThreeAreas[2]} making you:
            <span className="text-[#ff9e1b] text-2xl font-bold font-sans ml-1 mb-0">{TopThreeCode}</span>
        </p>
    )
}