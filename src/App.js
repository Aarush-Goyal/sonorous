import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutUsSection from "./components/AboutUsSection";
import EventList from "./components/EventList";
import ContactUsSection from "./components/ContactUsSection";
function App() {
  const [events] = useState([
    {
      name: "Sonorous Youth Mun",
      description:
        "Let me write some huge ass description of what cool stuff this organization has to offer and how cool it actually is and some more lorem ipum text because it need to be huge.",
      registerationFormLink: "https://www.google.com/",
      imageURL:
        "https://lh3.googleusercontent.com/MqqoZ-invzCiyNnIRniwsDx0wPbeKy2pFkhte1BvrkSUyst-TO_vSqB-CWiOJvfduHkRF7ezTeRIudMNAaZ2cl1Bq0aJLHxl6rKnKK3algCbKs2dppJrIGCeO_AcCk1kUoyS3Ow6484vFGoGyxY-IaDsahDKFZ6CxRCffBidttkotluVOAWxyDk44r47rI1CJMFnQmnE48Jr2TL4zz9c_X-UcC62LS8A6M60wAPm7YzPcWbrWbTxZZoBEm_yIGuLt0Krwunq_p9nJc6yI1tSmir-GrLFQU3zmuOTeFeLTXFv2tYzKDQw5SCWTJBMYywWK__8pAfKNLz1t4JsC3SEgOblyLKvOLA2Ldp4zt1ePAMnacl7vSKFTL80zpX9gkSfSBRFFPmm6KLRJNPAvokKkULaA6JfZKy_hDJeCMeM6Gp5jHGEjNPOclD9eLLqv38y2tSkNDk_RZxw4vwbcWoSOfcu3UX7Y039Bl02onovSV03FhQn34c1eoM39iZiLGTsjwsDaueQZ2u6QLL9GtoxoJ-iq4NEXHOt7pNyumtGuirhld-DEXNvMzokJbh9ocUKP1xdXac-wqgouzJRo4R-wnrHhZHj5hwZtppeR39qviMCx3B-8qSq7M4ViWDiMSwPwE6AWUi5e5OvTnQ6IMINoqQZHn7SSLwfv4ji_ncfB9ANaoqUAGxMsIW5KLbCr30=s972-no?authuser=0",
    },
    {
      name: "Sonorous Youth Mun",
      description:
        "Let me write some huge ass description of what cool stuff this organization has to offer and how cool it actually is and some more lorem ipum text because it need to be huge.",
      registerationFormLink: "https://www.google.com/",
      imageURL:
        "https://lh3.googleusercontent.com/MqqoZ-invzCiyNnIRniwsDx0wPbeKy2pFkhte1BvrkSUyst-TO_vSqB-CWiOJvfduHkRF7ezTeRIudMNAaZ2cl1Bq0aJLHxl6rKnKK3algCbKs2dppJrIGCeO_AcCk1kUoyS3Ow6484vFGoGyxY-IaDsahDKFZ6CxRCffBidttkotluVOAWxyDk44r47rI1CJMFnQmnE48Jr2TL4zz9c_X-UcC62LS8A6M60wAPm7YzPcWbrWbTxZZoBEm_yIGuLt0Krwunq_p9nJc6yI1tSmir-GrLFQU3zmuOTeFeLTXFv2tYzKDQw5SCWTJBMYywWK__8pAfKNLz1t4JsC3SEgOblyLKvOLA2Ldp4zt1ePAMnacl7vSKFTL80zpX9gkSfSBRFFPmm6KLRJNPAvokKkULaA6JfZKy_hDJeCMeM6Gp5jHGEjNPOclD9eLLqv38y2tSkNDk_RZxw4vwbcWoSOfcu3UX7Y039Bl02onovSV03FhQn34c1eoM39iZiLGTsjwsDaueQZ2u6QLL9GtoxoJ-iq4NEXHOt7pNyumtGuirhld-DEXNvMzokJbh9ocUKP1xdXac-wqgouzJRo4R-wnrHhZHj5hwZtppeR39qviMCx3B-8qSq7M4ViWDiMSwPwE6AWUi5e5OvTnQ6IMINoqQZHn7SSLwfv4ji_ncfB9ANaoqUAGxMsIW5KLbCr30=s972-no?authuser=0",
    },
    {
      name: "Sonorous Youth Mun",
      description:
        "Let me write some huge ass description of what cool stuff this organization has to offer and how cool it actually is and some more lorem ipum text because it need to be huge.",
      registerationFormLink: "https://www.google.com/",
      imageURL:
        "https://lh3.googleusercontent.com/MqqoZ-invzCiyNnIRniwsDx0wPbeKy2pFkhte1BvrkSUyst-TO_vSqB-CWiOJvfduHkRF7ezTeRIudMNAaZ2cl1Bq0aJLHxl6rKnKK3algCbKs2dppJrIGCeO_AcCk1kUoyS3Ow6484vFGoGyxY-IaDsahDKFZ6CxRCffBidttkotluVOAWxyDk44r47rI1CJMFnQmnE48Jr2TL4zz9c_X-UcC62LS8A6M60wAPm7YzPcWbrWbTxZZoBEm_yIGuLt0Krwunq_p9nJc6yI1tSmir-GrLFQU3zmuOTeFeLTXFv2tYzKDQw5SCWTJBMYywWK__8pAfKNLz1t4JsC3SEgOblyLKvOLA2Ldp4zt1ePAMnacl7vSKFTL80zpX9gkSfSBRFFPmm6KLRJNPAvokKkULaA6JfZKy_hDJeCMeM6Gp5jHGEjNPOclD9eLLqv38y2tSkNDk_RZxw4vwbcWoSOfcu3UX7Y039Bl02onovSV03FhQn34c1eoM39iZiLGTsjwsDaueQZ2u6QLL9GtoxoJ-iq4NEXHOt7pNyumtGuirhld-DEXNvMzokJbh9ocUKP1xdXac-wqgouzJRo4R-wnrHhZHj5hwZtppeR39qviMCx3B-8qSq7M4ViWDiMSwPwE6AWUi5e5OvTnQ6IMINoqQZHn7SSLwfv4ji_ncfB9ANaoqUAGxMsIW5KLbCr30=s972-no?authuser=0",
    },
    {
      name: "Sonorous Youth Mun",
      description:
        "Let me write some huge ass description of what cool stuff this organization has to offer and how cool it actually is and some more lorem ipum text because it need to be huge.",
      registerationFormLink: "https://www.google.com/",
      imageURL:
        "https://lh3.googleusercontent.com/MqqoZ-invzCiyNnIRniwsDx0wPbeKy2pFkhte1BvrkSUyst-TO_vSqB-CWiOJvfduHkRF7ezTeRIudMNAaZ2cl1Bq0aJLHxl6rKnKK3algCbKs2dppJrIGCeO_AcCk1kUoyS3Ow6484vFGoGyxY-IaDsahDKFZ6CxRCffBidttkotluVOAWxyDk44r47rI1CJMFnQmnE48Jr2TL4zz9c_X-UcC62LS8A6M60wAPm7YzPcWbrWbTxZZoBEm_yIGuLt0Krwunq_p9nJc6yI1tSmir-GrLFQU3zmuOTeFeLTXFv2tYzKDQw5SCWTJBMYywWK__8pAfKNLz1t4JsC3SEgOblyLKvOLA2Ldp4zt1ePAMnacl7vSKFTL80zpX9gkSfSBRFFPmm6KLRJNPAvokKkULaA6JfZKy_hDJeCMeM6Gp5jHGEjNPOclD9eLLqv38y2tSkNDk_RZxw4vwbcWoSOfcu3UX7Y039Bl02onovSV03FhQn34c1eoM39iZiLGTsjwsDaueQZ2u6QLL9GtoxoJ-iq4NEXHOt7pNyumtGuirhld-DEXNvMzokJbh9ocUKP1xdXac-wqgouzJRo4R-wnrHhZHj5hwZtppeR39qviMCx3B-8qSq7M4ViWDiMSwPwE6AWUi5e5OvTnQ6IMINoqQZHn7SSLwfv4ji_ncfB9ANaoqUAGxMsIW5KLbCr30=s972-no?authuser=0",
    },
    {
      name: "Sonorous Youth Mun",
      description:
        "Let me write some huge ass description of what cool stuff this organization has to offer and how cool it actually is and some more lorem ipum text because it need to be huge.",
      registerationFormLink: "https://www.google.com/",
      imageURL:
        "https://lh3.googleusercontent.com/MqqoZ-invzCiyNnIRniwsDx0wPbeKy2pFkhte1BvrkSUyst-TO_vSqB-CWiOJvfduHkRF7ezTeRIudMNAaZ2cl1Bq0aJLHxl6rKnKK3algCbKs2dppJrIGCeO_AcCk1kUoyS3Ow6484vFGoGyxY-IaDsahDKFZ6CxRCffBidttkotluVOAWxyDk44r47rI1CJMFnQmnE48Jr2TL4zz9c_X-UcC62LS8A6M60wAPm7YzPcWbrWbTxZZoBEm_yIGuLt0Krwunq_p9nJc6yI1tSmir-GrLFQU3zmuOTeFeLTXFv2tYzKDQw5SCWTJBMYywWK__8pAfKNLz1t4JsC3SEgOblyLKvOLA2Ldp4zt1ePAMnacl7vSKFTL80zpX9gkSfSBRFFPmm6KLRJNPAvokKkULaA6JfZKy_hDJeCMeM6Gp5jHGEjNPOclD9eLLqv38y2tSkNDk_RZxw4vwbcWoSOfcu3UX7Y039Bl02onovSV03FhQn34c1eoM39iZiLGTsjwsDaueQZ2u6QLL9GtoxoJ-iq4NEXHOt7pNyumtGuirhld-DEXNvMzokJbh9ocUKP1xdXac-wqgouzJRo4R-wnrHhZHj5hwZtppeR39qviMCx3B-8qSq7M4ViWDiMSwPwE6AWUi5e5OvTnQ6IMINoqQZHn7SSLwfv4ji_ncfB9ANaoqUAGxMsIW5KLbCr30=s972-no?authuser=0",
    },
    {
      name: "Sonorous Youth Mun",
      description:
        "Let me write some huge ass description of what cool stuff this organization has to offer and how cool it actually is and some more lorem ipum text because it need to be huge.",
      registerationFormLink: "https://www.google.com/",
      imageURL:
        "https://lh3.googleusercontent.com/MqqoZ-invzCiyNnIRniwsDx0wPbeKy2pFkhte1BvrkSUyst-TO_vSqB-CWiOJvfduHkRF7ezTeRIudMNAaZ2cl1Bq0aJLHxl6rKnKK3algCbKs2dppJrIGCeO_AcCk1kUoyS3Ow6484vFGoGyxY-IaDsahDKFZ6CxRCffBidttkotluVOAWxyDk44r47rI1CJMFnQmnE48Jr2TL4zz9c_X-UcC62LS8A6M60wAPm7YzPcWbrWbTxZZoBEm_yIGuLt0Krwunq_p9nJc6yI1tSmir-GrLFQU3zmuOTeFeLTXFv2tYzKDQw5SCWTJBMYywWK__8pAfKNLz1t4JsC3SEgOblyLKvOLA2Ldp4zt1ePAMnacl7vSKFTL80zpX9gkSfSBRFFPmm6KLRJNPAvokKkULaA6JfZKy_hDJeCMeM6Gp5jHGEjNPOclD9eLLqv38y2tSkNDk_RZxw4vwbcWoSOfcu3UX7Y039Bl02onovSV03FhQn34c1eoM39iZiLGTsjwsDaueQZ2u6QLL9GtoxoJ-iq4NEXHOt7pNyumtGuirhld-DEXNvMzokJbh9ocUKP1xdXac-wqgouzJRo4R-wnrHhZHj5hwZtppeR39qviMCx3B-8qSq7M4ViWDiMSwPwE6AWUi5e5OvTnQ6IMINoqQZHn7SSLwfv4ji_ncfB9ANaoqUAGxMsIW5KLbCr30=s972-no?authuser=0",
    },
  ]);

  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <AboutUsSection />
      <EventList events={events} />
      <ContactUsSection />
    </div>
  );
}

export default App;
