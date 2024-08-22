import { createSlice } from "@reduxjs/toolkit";

const generateResponse = (question) => {
  const lowerCaseQuestion = question.toLowerCase();

  if (
    /^(bonjour|salut|coucou|hey|hello|hi|hola)\s*\?$/.test(lowerCaseQuestion)
  ) {
    return "Bonjour ! En quoi puis-je vous être utile aujourd'hui ?";
  }

  if (/^comment\s+t'appelles-tu\s*\?$/.test(lowerCaseQuestion)) {
    return "Je suis Buddy, un chatbot créé par Manon pour vous aider à mieux la connaître.";
  }

  if (/^quel\s+âge\s+a\s+manon\s*\?$/.test(lowerCaseQuestion)) {
    return "Manon a 21 ans.";
  }

  if (
    /^qu'est-ce\s+qu'elle\s+aime\s+faire\s+dans\s+la\s+vie\s*\?$/.test(
      lowerCaseQuestion
    )
  ) {
    return "Elle a de nombreuses passions ! Elle adore coder, faire du sport, jouer aux jeux vidéo, lire et même faire du crochet.";
  }

  if (
    /^quelle\s+est\s+sa\s+dernière\s+formation\s*\?$/.test(lowerCaseQuestion)
  ) {
    return "Sa dernière formation est celle d'intégratrice web chez OpenClassrooms, où elle a obtenu un diplôme de niveau bac+2.";
  }

  if (/^quel\s+est\s+son\s+dernier\s+emploi\s*\?$/.test(lowerCaseQuestion)) {
    return "Avant de se reconvertir dans le développement, elle a occupé divers postes. Son dernier emploi était celui d'employée polyvalente dans une laiterie locale.";
  }

  if (
    /^qu'est-ce\s+qu'elle\s+aime\s+dans\s+le\s+développement\s*\?$/.test(
      lowerCaseQuestion
    )
  ) {
    return "Elle aime tout dans le développement ! Que ce soit créer, résoudre des problèmes complexes, concevoir des interfaces esthétiques et performantes, ou encore apprendre en continu.";
  }

  if (/^quelles\s+sont\s+ses\s+qualités\s*\?$/.test(lowerCaseQuestion)) {
    return "Manon est curieuse, sait bien travailler en équipe, est autonome, dynamique et surtout, elle est passionnée par ce qu'elle fait.";
  }

  if (/^qu'attend-elle\s+dans\s+son\s+travail\s*\?$/.test(lowerCaseQuestion)) {
    return "Ce qui compte le plus pour elle, c'est la cohésion d'équipe, la collaboration et relever des défis stimulants.";
  }

  return "Je ne suis pas certain de bien comprendre votre question. Pouvez-vous la reformuler ?";
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
