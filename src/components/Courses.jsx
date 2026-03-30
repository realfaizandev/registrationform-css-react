export default function Courses() {
    return (
        <>
            <table>
                <tr>
                    <td>
                        <label>COURSES <br /> APPLIED FOR</label>
                    </td>
                    <td>
                        <label>BCA</label><input type="radio" name="option" />
                        <label>B.Com</label><input type="radio" name="option" />
                        <label>B.Sc</label><input type="radio" name="option" />
                        <label>B.A</label><input type="radio" name="option" />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>
                        <input type="button" value="Submit" />
                        <input type="button" value="Reset" />
                    </td>
                </tr>
            </table>
        </>
    );
}