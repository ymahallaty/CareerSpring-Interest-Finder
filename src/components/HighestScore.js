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
        <div className="space-y-6 py-5 text-base text-center leading-7 text-black">
            Congratulations! You&apos;ve scored highest in {topThreeAreas[0]}, {topThreeAreas[1]}, and {topThreeAreas[2]} making you:
            <div>{TopThreeCode}</div>
        </div>
    )
}