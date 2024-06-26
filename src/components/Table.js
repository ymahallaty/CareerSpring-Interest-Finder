"use client";

import React from 'react'
import riasecStore from "../app/assessment/stores/riasecStore";
import {useSearchParams} from "next/navigation";

export default function Table() {
    // const riasec = riasecStore(state => state.riasecArray);

  const searchParams = useSearchParams();
  const riasecString = searchParams.get('riasec');
  const riasec = riasecString.split(',').map(Number);

  return (
    <table className="pt-0 border-collapse border-2">
        <thead>
            <tr>
                <th className="border-2">Characteristic</th>
                <th className="border-2">Score</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="border-2 px-4 py-2">Realistic</td>
                <td className="border-2 px-4 py-2">{riasec.length && riasec[0]}</td>
            </tr>
            <tr>
                <td className="border-2 px-4 py-2">Investigative</td>
                <td className="border-2 px-4 py-2">{riasec.length && riasec[1]}</td>
            </tr>
            <tr>
                <td className="border-2 px-4 py-2">Artistic</td>
                <td className="border-2 px-4 py-2">{riasec.length && riasec[2]}</td>
            </tr>
            <tr>
                <td className="border-2 px-4 py-2">Social</td>
                <td className="border-2 px-4 py-2">{riasec.length && riasec[3]}</td>
            </tr>
            <tr>
                <td className="border-2 px-4 py-2">Enterprising</td>
                <td className="border-2 px-4 py-2">{riasec.length && riasec[4]}</td>
            </tr>
            <tr>
                <td className="border-2 px-4 py-2">Conventional</td>
                <td className="border-2 px-4 py-2">{riasec.length && riasec[5]}</td>
            </tr>
        </tbody>
    </table>
  );
}

