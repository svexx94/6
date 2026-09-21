class Book {
  static count = 0;

  constructor(title, author, year) {
    if (!title || typeof title !== "string") {
      throw new Error("Book: title обязателен");
    }
    if (!author || typeof author !== "string") {
      throw new Error("Book: author обязателен");
    }
    this.title = title;
    this.author = author;
    this.year = year;
    Book.count++;
  }

  static getCount() {
    return Book.count;
  }

  static resetCount() {
    Book.count = 0;
  }

  getInfo() {
    return `«${this.title}» — ${this.author} (${this.year})`;
  }
}

const b1 = new Book("1984", "Оруэлл", 1949);
const b2 = new Book("Дюна", "Герберт", 1965);
const b3 = new Book("Хоббит", "Толкин", 1937);

console.log(b1.getInfo());
console.log(b2.getInfo());
console.log(b3.getInfo());

console.log("Создано книг:", Book.getCount());
console.log("Создано книг:", Book.count);

const b4 = new Book("451° по Фаренгейту", "Брэдбери", 1953);
console.log("Создано книг:", Book.getCount());


class Employee {
  constructor(name, salary) {
    if (!name || typeof name !== "string") {
      throw new Error("Employee: name обязателен");
    }
    if (typeof salary !== "number" || salary < 0) {
      throw new Error("Employee: salary должен быть неотрицательным числом");
    }
    this.name = name;
    this.salary = salary;
    this.role = "employee";
  }

  static createIntern(name) {
    const intern = new Employee(name, 20000);
    intern.role = "intern";
    return intern;
  }

  static createManager(name, salary, teamSize = 1) {
    const manager = new Employee(name, salary);
    manager.role = "manager";
    manager.teamSize = teamSize;
    return manager;
  }

  getInfo() {
    return `${this.role}: ${this.name}, оклад: ${this.salary} ₽`;
  }
}

const intern = Employee.createIntern("Пётр");
console.log(intern.getInfo());

const regular = new Employee("Аня", 80000);
console.log(regular.getInfo());

const manager = Employee.createManager("Игорь", 150000, 5);
console.log(manager.getInfo(), "команда:", manager.teamSize);

console.log(intern instanceof Employee);
console.log(regular instanceof Employee);


class MathUtils {
  constructor() {
    throw new Error("MathUtils нельзя инстанцировать — используйте статические методы");
  }

  static sum(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error("MathUtils.sum: ожидается массив");
    }
    return numbers.reduce((acc, n) => acc + n, 0);
  }

  static average(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error("MathUtils.average: ожидается массив");
    }
    if (numbers.length === 0) {
      throw new Error("MathUtils.average: массив не должен быть пустым");
    }
    return MathUtils.sum(numbers) / numbers.length;
  }

  static max(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error("MathUtils.max: ожидается массив");
    }
    if (numbers.length === 0) {
      throw new Error("MathUtils.max: массив не должен быть пустым");
    }
    return numbers.reduce((max, n) => (n > max ? n : max), -Infinity);
  }
}

const nums = [4, 8, 15, 16, 23, 42];

console.log("Сумма:    ", MathUtils.sum(nums));
console.log("Среднее:  ", MathUtils.average(nums));
console.log("Максимум: ", MathUtils.max(nums));

try { new MathUtils(); } catch (e) { console.log("Ошибка:", e.message); }
try { MathUtils.average([]); } catch (e) { console.log("Ошибка:", e.message); }
try { MathUtils.max([]); } catch (e) { console.log("Ошибка:", e.message); }
try { MathUtils.sum("abc"); } catch (e) { console.log("Ошибка:", e.message); }