// Explicações curtas e exemplos
const groups = {
    DDL: {
      desc: "DDL é usado para criar e alterar estruturas do banco de dados.",
      example: "CREATE TABLE Clientes (ID INT PRIMARY KEY, Nome VARCHAR(100));"
    },
    DML: {
      desc: "DML é usado para manipular os dados (inserir, consultar, atualizar, excluir).",
      example: "SELECT Nome, Email FROM Clientes WHERE ID = 1;"
    },
    DCL: {
      desc: "DCL é usado para controlar permissões e acessos no banco.",
      example: "GRANT SELECT ON Clientes TO usuario_exemplo;"
    },
    TCL: {
      desc: "TCL gerencia transações, garantindo a integridade dos dados.",
      example: "COMMIT;"
    }
  };
  
  // Mostrar grupo escolhido
  function showGroup(group) {
    const data = groups[group];
    document.getElementById("output").innerHTML = 
      `<h5>${group} 📌</h5>
       <p>${data.desc}</p>
       <pre class="bg-dark text-info p-2 rounded"><code>${data.example}</code></pre>`;
  }
  
  // Verificar comando digitado
  function checkCommand() {
    const cmd = document.getElementById("commandInput").value.trim().toUpperCase();
    let result = "❌ Comando não reconhecido. Tente novamente!";
  
    if (cmd.startsWith("CREATE") || cmd.startsWith("ALTER") || cmd.startsWith("DROP")) {
      result = "✅ Esse comando pertence ao grupo DDL.";
    } else if (cmd.startsWith("SELECT") || cmd.startsWith("INSERT") || cmd.startsWith("UPDATE") || cmd.startsWith("DELETE")) {
      result = "✅ Esse comando pertence ao grupo DML.";
    } else if (cmd.startsWith("GRANT") || cmd.startsWith("REVOKE")) {
      result = "✅ Esse comando pertence ao grupo DCL.";
    } else if (cmd.startsWith("COMMIT") || cmd.startsWith("ROLLBACK")) {
      result = "✅ Esse comando pertence ao grupo TCL.";
    }
  
    document.getElementById("output").innerHTML = result;
  }
  
  // Perguntas para o modo teste
  const questions = [
    { q: "Qual grupo usa o comando CREATE?", a: "DDL" },
    { q: "Qual grupo controla permissões de usuários?", a: "DCL" },
    { q: "Qual grupo é usado para COMMIT e ROLLBACK?", a: "TCL" },
    { q: "Qual grupo é usado para SELECT e UPDATE?", a: "DML" }
  ];
  
  function quiz() {
    const random = questions[Math.floor(Math.random() * questions.length)];
    const userAnswer = prompt(random.q + " (Digite: DDL, DML, DCL ou TCL)");
    if (!userAnswer) return;
  
    if (userAnswer.toUpperCase() === random.a) {
      document.getElementById("quizOutput").innerHTML = "🎉 Resposta correta!";
    } else {
      document.getElementById("quizOutput").innerHTML = "❌ Resposta incorreta. A resposta certa é: " + random.a;
    }
  }
  