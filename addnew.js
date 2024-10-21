const addbutton = document.querySelector('#add');

const addnew = () => {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.backgroundColor = 'white'; // Set the background color directly on the square element
    
    let name = document.getElementById("name1").value;

    // Example posted date (you can replace it with the actual posted date or a user-inputted date)
    const postedDate = new Date()

    // Function to calculate the number of days ago
    const calculateDaysAgo = (postedDate) => {
        const today = new Date();
        const timeDiff = Math.abs(today - postedDate);
        const daysAgo = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        return daysAgo;
    };

    // Calculate the days ago and insert it into the HTML
    const daysAgo = calculateDaysAgo(postedDate);

    // Add information inside the square element
    square.innerHTML = `
        <div class="square">
        <div class="head">${name}</div>
        <div>Cam Tools Industries</div><br>
        <div class="textSquare">
        <div><i class="fa-solid fa-bag-shopping"></i> <span style="margin-left: 10px;"> 20-30 Yrs </span> <span id="ruppee" class="vertical"></span><i id="ruppee" class="fa-solid fa-indian-rupee-sign"></i> 9 - 12 Lacs PA<span id="ruppee"  class="vertical"></span><i id="ruppee" class="fa-solid fa-location-dot"></i>Pune(Chakan+1)</div>
        <div><i class="fa-regular fa-note-sticky"></i><span style="margin-left: 10px;">Exceptional managerial, communication, problem-solving skills. .Bach.. </span> </div>
        <p>Finite Element Analysis <span class="smallHorizontal"></span><span>and lumax.<span class="smallHorizontal"></span></span><span style="font-size: 12px;"> The ideal candidate will possess a profound understanding of the automative Tier<span class="smallHorizontal"></span></span><span>Desining<span class="smallHorizontal"></span></span>Analysis</p>
        <div>${daysAgo} Days Ago <span style="margin-left: 350px;">Save <i class="fa-regular fa-bookmark"></i></span></div>
    </div>
    `;

    document.body.appendChild(square);
};


addbutton.addEventListener('click', () => addnew());
