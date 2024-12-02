

const feedbackFormEl = document.querySelector('.feedback-form');
const formData = { email: "", message: "" };

const fillFormField = () => {
  try {
    const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (formDataFromLS === null) {
      return;
    }

    Object.keys(formDataFromLS).forEach(key => {
      feedbackFormEl.elements[key].value = formDataFromLS[key];
      formData[key] = formDataFromLS[key];
    });
  } catch (err) {
    console.log(err);
  }
};

fillFormField();

const onFormFieldChange = event => {
  const { target: formField } = event;
  const fieldName = formField.name;
  const fieldValue = formField.value;

  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  if (formData.email === "" || formData.message === "") {
    alert('Fill please all fields');
  } else {

    feedbackFormEl.reset();
    localStorage.removeItem('feedback-form-state');
    Object.keys(formData).forEach(key => formData[key] = "");
  }
};

feedbackFormEl.addEventListener('input', onFormFieldChange);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);