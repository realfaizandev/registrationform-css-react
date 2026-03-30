export default function PersonalInfo() {
    return (
        <>
            <table>
                <tr>
                    <td><label>FIRST NAME</label></td>
                    <td>
                        <input type="text" />
                        (max 30 characters a-z and A-Z)
                    </td>
                </tr>
                <tr>
                    <td><label>LAST NAME</label></td>
                    <td>
                        <input type="text" />
                        (max 30 characters a-z and A-Z)
                    </td>
                </tr>
                <tr>
                    <td><label>DATE OF BIRTH</label></td>
                    <td>
                        <select>
                            <option>Day</option>
                            <option>01</option><option>02</option><option>03</option>
                            <option>04</option><option>05</option><option>06</option>
                            <option>07</option><option>08</option><option>09</option>
                            <option>10</option><option>11</option><option>12</option>
                            <option>13</option><option>14</option><option>15</option>
                            <option>16</option><option>17</option><option>18</option>
                            <option>19</option><option>20</option><option>21</option>
                            <option>22</option><option>23</option><option>24</option>
                            <option>25</option><option>26</option><option>27</option>
                            <option>28</option><option>29</option><option>30</option>
                        </select>
                        <select>
                            <option>Month</option>
                            <option>01</option><option>02</option><option>03</option>
                            <option>04</option><option>05</option><option>06</option>
                            <option>07</option><option>08</option><option>09</option>
                            <option>10</option><option>11</option><option>12</option>
                        </select>
                        <select>
                            <option>Year</option>
                            <option>2000</option><option>2001</option><option>2002</option>
                            <option>2003</option><option>2004</option><option>2005</option>
                            <option>2006</option><option>2007</option><option>2008</option>
                            <option>2009</option><option>2010</option><option>2011</option>
                            <option>2012</option><option>2013</option><option>2014</option>
                            <option>2015</option><option>2016</option><option>2017</option>
                            <option>2018</option><option>2019</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td><label>EMAIL ID</label></td>
                    <td><input type="email" /></td>
                </tr>
                <tr>
                    <td><label>MOBILE NUMBER</label></td>
                    <td>
                        <input type="text" />
                        (10 digit number)
                    </td>
                </tr>
                <tr>
                    <td><label>GENDER</label></td>
                    <td>
                        <label>Male</label>
                        <input type="radio" name="gender" />
                        <label>Female</label>
                        <input type="radio" name="gender" />
                    </td>
                </tr>
                <tr>
                    <td><label>ADDRESS</label></td>
                    <td>
                        <textarea rows="6" cols="30"></textarea>
                    </td>
                </tr>
                <tr>
                    <td><label>FIRST NAME</label></td>
                    <td>
                        <input type="text" />
                        (max 30 characters a-z and A-Z)
                    </td>
                </tr>
                <tr>
                    <td><label>PIN CODE</label></td>
                    <td>
                        <input type="text" />
                        (6 digit number)
                    </td>
                </tr>
                <tr>
                    <td><label>STATE</label></td>
                    <td>
                        <input type="text" />
                        (max 30 characters a-z and A-Z)
                    </td>
                </tr>
                <tr>
                    <td><label>COUNTRY</label></td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td><label>HOBBIES</label></td>
                    <td>
                        <label>Drawing</label><input type="checkbox" />
                        <label>Singing</label><input type="checkbox" />
                        <label>Dancing</label><input type="checkbox" />
                        <label>Sketching</label><input type="checkbox" /><br />
                        <label>Others</label><input type="checkbox" />
                        <input type="text" />
                    </td>
                </tr>
            </table>
        </>
    );
}