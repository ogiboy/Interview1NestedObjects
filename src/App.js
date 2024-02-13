import { List, ListDivider, ListItem, ListItemContent } from "@mui/joy";
import React, { useState } from "react";

function App() {
  const [nestedObjected, setNestedObject] = useState({
    taxi: "Ücret karşılığında yolcu taşımak için lisanslı bir araç",
    food: {
      sushi:
        "Deniz ürünleri ve sebzelerle birlikte sunulan geleneksel bir Japon yemeği",
      apple: {
        Honeycrisp:
          "MAES Bahçe Araştırma Merkezi'nde geliştirilen bir elma çeşidi",
        Fuji:
          "Tohoku Araştırma İstasyonu'nda yetiştiriciler tarafından geliştirilen bir elma çeşidi"
      }
    }
  });

  return (
    <div style={{ margin: "auto", width: "70%", paddingTop: 40 }}>
      <DisplayNested nestedObjected={nestedObjected} />
    </div>
  );
}

const DisplayNested = ({ nestedObjected }) => {
  // KODUNUZ BURAYA GELECEK
  const renderObj = (obj) => {
    return (
      <List variant="outlined" size="lg" color="primary" component="ol">
        {Object.entries(obj).map(([key, value]) => (
          <div key={key}>
            <ListItem>
              <ListItemContent>
                {key}: {typeof value === "object" ? renderObj(value) : value}
              </ListItemContent>
            </ListItem>
            <ListDivider inset="context" />
          </div>
        ))}
      </List>
    );
  };

  return <div>{renderObj(nestedObjected)}</div>;
};

export default App;
