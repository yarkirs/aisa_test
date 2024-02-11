export default class ApiController {
  static async saveMachine(configMachine) {
    const response = await fetch('http://localhost:3000/api/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(configMachine),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // eslint-disable-next-line no-alert
    alert('Конфигурация успешно сохранена');
  }

  static async getMachine() {
    const response = await fetch('http://localhost:3000/api/configurations', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });

    if (!response.ok) {
      throw new Error(`Fetch Error!. Status: ${response.status}`);
    }

    return response.json();
  }
}
