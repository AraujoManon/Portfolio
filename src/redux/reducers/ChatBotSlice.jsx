import { createSlice } from "@reduxjs/toolkit";

const generateResponse = (question) => {
  const lowerCaseQuestion = question.toLowerCase();
  if (
    /^(bonjour|salut|coucou|hey|hello|hi|hola)\s*\?$/.test(lowerCaseQuestion)
  ) {
    return "Bonjour ! Comment puis-je vous aider aujourd'hui ?";
  }

 
  if (/^comment\s+t'appelles-tu\s*\?$/.test(lowerCaseQuestion)) {
    return "Je suis un chatbot créé par Manon pour vous aider à mieux la connaître. Mon nom est Buddy.";
  }
 
  if (/^quel\s+âge\s+a\s+manon\s*\?$/.test(lowerCaseQuestion)) {
    return "Elle a 21 ans.";
  }


  if (
    /^qu'est-ce\s+qu'elle\s+aime\s+faire\s+dans\s+la\s+vie\s*\?$/.test(
      lowerCaseQuestion
    )
  ) {
    return "Beaucoup de choses ! Mais surtout le code, le sport, les jeux vidéo, la lecture ou encore le crochet.";
  }

  
  if (
    /^quelle\s+est\s+sa\s+dernière\s+formation\s*\?$/.test(lowerCaseQuestion)
  ) {
    return "Une formation d'intégrateur web chez OpenClassrooms. Elle a eu un bac+2 !";
  }

  
  if (/^quel\s+est\s+son\s+dernier\s+emploi\s*\?$/.test(lowerCaseQuestion)) {
    return "Avant de se reconvertir, elle a fait plein de choses. Son dernier emploi était employée polyvalente dans une laiterie locale.";
  }

  
  if (
    /^qu'est-ce\s+qu'elle\s+aime\s+dans\s+le\s+développement\s*\?$/.test(
      lowerCaseQuestion
    )
  ) {
    return "Tout ! Créer, résoudre des problèmes mystérieux, faire quelque chose d'esthétique et de performant, mais surtout, l'apprentissage continu.";
  }


  if (/^quelles\s+sont\s+ses\s+qualités\s*\?$/.test(lowerCaseQuestion)) {
    return "Elle est curieuse, sait travailler en équipe, est autonome et dynamique, et surtout elle aime ce qu'elle fait !";
  }

  
  if (/^qu'attend-elle\s+dans\s+son\s+travail\s*\?$/.test(lowerCaseQuestion)) {
    return "Pour Manon, le plus important est la cohésion d'équipe, la collaboration et le défi.";
  }

  
  return "Je ne suis pas sûr de comprendre votre question. Pouvez-vous reformuler ?";
};

const chatbotSlice = createSlice({
  name: "chatbot",
  initialState: {
    messages: [],
    isVisible: false,
  },
  reducers: {
    sendMessage: (state, action) => {
      const { message } = action.payload;
      const response = generateResponse(message);
      state.messages.push({ type: "user", text: message });
      state.messages.push({ type: "bot", text: response });
    },
    toggleChatBot: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { sendMessage, toggleChatBot } = chatbotSlice.actions;
export default chatbotSlice.reducer;
