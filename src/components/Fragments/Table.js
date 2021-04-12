import React from 'react'
import Columns from './Columns'

function Table() {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <Columns />
                    </tr>
                </tbody>
                <tr>
                    <td>Aishwarya</td>
                    <td>Pune</td>
                    <td>7972052081</td>
                </tr>
                <tr>
                    <td>Sakshi</td>
                    <td>Delhi</td>
                    <td>7972052081</td>
                </tr>
                <tr>
                    <td>Ankita</td>
                    <td>Pune</td>
                    <td>7343352081</td>
                </tr>
            </table>
        </div>
    )
}

export default Table
