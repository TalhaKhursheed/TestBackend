const API_URL = "http://localhost:3000"; 

async function fetchJobs() {
    try {
        const response = await fetch(`${API_URL}/jobs`);
        const jobs = await response.json();
        
        const jobList = document.getElementById("jobList");
        jobList.innerHTML = ""; 

        jobs.forEach(job => {
            const jobElement = document.createElement("div");
            jobElement.classList.add("job");
            jobElement.innerHTML = `
                <span>${job.title} - ${job.company}</span>
                <button onclick="applyJob('${job.id}')">Apply</button>
            `;
            jobList.appendChild(jobElement);
        });
    } catch (error) {
        console.error("Error fetching jobs:", error);
        document.getElementById("jobList").innerText = "Failed to load jobs.";
    }
}

function applyJob(jobId) {
    document.getElementById("job_id").value = jobId;
    document.getElementById("applicationForm").style.display = "block";
}

document.getElementById("applicationForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const job_id = document.getElementById("job_id").value;
    const applicant_name = document.getElementById("applicant_name").value;
    const applicant_email = document.getElementById("applicant_email").value;
    const cover_letter = document.getElementById("cover_letter").value;

    const applicationData = { job_id, applicant_name, applicant_email, cover_letter };

    try {
        const response = await fetch(`${API_URL}/applications`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(applicationData)
        });

        const message = document.getElementById("message");

        if (response.ok) {
            message.innerText = "Application submitted successfully!";
            message.style.color = "green";
            document.getElementById("applicationForm").reset();
            document.getElementById("applicationForm").style.display = "none";
        } else {
            message.innerText = "Failed to submit application.";
            message.style.color = "red";
        }
    } catch (error) {
        console.error("Error submitting application:", error);
        document.getElementById("message").innerText = "Failed to submit application.";
    }
});

fetchJobs();
