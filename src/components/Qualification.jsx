export default function Qualification() {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td><label>QUALIFICATION</label></td>
                        <th>Sl.No.Examination</th>
                        <th>Board</th>
                        <th>Percentage</th>
                        <th>Year of Passing</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>1 Class X</td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>2 Class XII</td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>3 Graduation</td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>4 Masters</td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td style={{ textAlign: "center" }}>(10 char max)</td>
                        <td style={{ textAlign: "center" }}>(upto 2 decimal)</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}