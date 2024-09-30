function getDOB()
{
    const dobInput = document.getElementById('dob').value;
    const currentDateInput = document.getElementById('cdate').value;

    const dobInputs = new Date(dobInput);
    const currentDate = new Date(currentDateInput);

    let age = currentDate.getFullYear() - dobInputs.getFullYear();

    
    document.getElementById('currentAge').textContent = 'Your age is '+ age +' Years.'
}