document.addEventListener('DOMContentLoaded', () => {

    const steps = document.querySelectorAll('.step');
    const lines = document.querySelectorAll('.line');
    const stepTitle = document.querySelectorAll('.text-loanbuddy-grey');
    // const content = document.getElementById('step-content');
    const applyBtn = document.getElementById('apply-btn-cust-1');

    const contentSteps = [
        document.getElementById('step-content-1'),
        document.getElementById('step-content-2'),
        document.getElementById('step-content-3')
    ];

    // const stepTitle = [
    //     ``,
    //     `<h5 class="text-loanbuddy-2 text-center mt-3">Search Loan Comparison Page</h5>`,
    //     `<h5 class="text-loanbuddy-2 text-center mt-3">Fill Loan Application</h5>`,
    //     `<h5 class="text-loanbuddy-2 text-center mt-3">Submit Documents</h5>`
    // ]

    steps.forEach((step, index) => {
        step.addEventListener('click', () => {
            const stepNumber = step.dataset.step;

            // console.log("stepNumber ", stepNumber);
            // console.log("stepTitle[stepNumber] ", stepTitle[stepNumber]);
            
            // Update content
            // content.textContent = `Content for step ${stepNumber}`;
            // content.innerHTML = stepTitle[stepNumber];

            // console.log("stepnumber ", stepNumber);

            if (stepNumber == 3) {
                applyBtn.classList.add('active');
            } 
            else {
                applyBtn.classList.remove('active');
            }

            contentSteps.forEach((content, i) => {
                content.classList.toggle('active', i === stepNumber-1);
            });
            

            // Update classes for steps and lines
            steps.forEach((s, i) => {
                s.classList.toggle('completed', i < index);
                s.classList.toggle('active', i === index);
            });

            lines.forEach((l, i) => {
                l.classList.toggle('completed', i < index);
                l.classList.toggle('active', i === index - 1);
            });

            stepTitle.forEach((t, i) => {
                t.classList.toggle('viewed', i < index);
                t.classList.toggle('text-loanbuddy-2', i === index);
            });

        });
    });

});
