import type { StackNavigationProp } from "@react-navigation/stack";
import { filter, find } from "lodash";
import type { FC } from "react";
import * as React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

import ProfileImage from "../assets/images/Humaaans_Space_1.svg";
import Button from "../components/form/Button";
import Checkbox from "../components/form/Checkbox";
import Datepicker from "../components/form/DatePicker";
import { View } from "../components/Themed";
import Colors from "../constants/Colors";
import type { RootStackParamList, UserContext, UserSituation } from "../types";

interface Props {
  navigation: StackNavigationProp<RootStackParamList, "profile">;
}

export const Profile: FC<Props> = ({ navigation }) => {
  const appName = "1000 JOURS APP'";
  const image = <ProfileImage />;
  const title = "Votre profil";

  const defaultUserContext: UserContext = {
    childBirthday: null,
    situations: [
      { id: 1, isChecked: false, label: "J'ai en projet d'avoir un enfant" },
      { id: 2, isChecked: false, label: "Je cherche à concevoir un enfant" },
      { id: 3, isChecked: false, label: "J'attends un enfant" },
      { id: 4, isChecked: false, label: "J'ai un enfant" },
      { id: 5, isChecked: false, label: "J'ai plusieurs enfants" },
      { id: 6, isChecked: false, label: "Je suis un professionnel de santé" },
    ],
  };

  const hasCheckedSituation = () => {
    return filter(userSituations, ["isChecked", true]).length > 0;
  };

  const [userSituations, setUserSituations] = React.useState<UserSituation[]>(
    defaultUserContext.situations
  );
  const [childBirthday, setChildBirthday] = React.useState<Date | null>(
    defaultUserContext.childBirthday
  );
  const [
    hasCheckedUserSituation,
    setHasCheckedSituation,
  ] = React.useState<boolean>(hasCheckedSituation());

  const updateUserSituations = (userSituation: UserSituation) => {
    setUserSituations(() => {
      return defaultUserContext.situations.map((item) => {
        if (item.id === userSituation.id) {
          return { ...item, isChecked: !userSituation.isChecked };
        } else {
          return item;
        }
      });
    });
  };

  const updateChildBirthday = (date: Date | null) => {
    setChildBirthday(() => date);
  };

  React.useEffect(() => {
    setHasCheckedSituation(hasCheckedSituation());
  }, [userSituations]);

  const getCheckedUserSituationsWhereChildBirthdayIsNeeded = () => {
    const userSituationsIdsWhereChildBirthdayIsNeeded = [3, 4, 5];
    return filter(userSituations, (userSituation) => {
      return (
        userSituation.isChecked &&
        userSituationsIdsWhereChildBirthdayIsNeeded.includes(userSituation.id)
      );
    });
  };
  const childBirthdayIsNeeded = () => {
    const results = getCheckedUserSituationsWhereChildBirthdayIsNeeded();
    return results.length > 0;
  };
  const getChildBirthdayLabel = () => {
    const results = getCheckedUserSituationsWhereChildBirthdayIsNeeded();
    if (find(results, ["id", 3])) {
      return "Naissance prévue de votre enfant";
    } else if (find(results, ["id", 4])) {
      return "Date de naissance de votre enfant";
    } else if (find(results, ["id", 5])) {
      return "Date de naissance de votre enfant le plus jeune";
    }
    return "Date de naissance de votre enfant";
  };

  return (
    <View style={[styles.mainContainer]}>
      <View style={[styles.header, styles.justifyContentCenter]}>
        <Text style={[styles.appName]}>{appName}</Text>
      </View>
      <ScrollView style={[styles.body]}>
        <View style={[styles.justifyContentCenter]}>{image}</View>
        <Text style={[styles.title, styles.textAlignCenter]}>{title}</Text>
        <View style={[styles.choices]}>
          {userSituations.map((situation, index) => {
            return (
              <View key={index}>
                <Checkbox
                  title={situation.label}
                  checked={situation.isChecked}
                  onPress={() => {
                    updateUserSituations(situation);
                  }}
                />
              </View>
            );
          })}
        </View>
        <View style={[childBirthdayIsNeeded() ? null : styles.hide]}>
          <Text style={[styles.colorPrimary, styles.textAlignCenter]}>
            {getChildBirthdayLabel()}
          </Text>
          <View style={[styles.datepickerContainer]}>
            <Datepicker
              date={childBirthday ? childBirthday : new Date()}
              onChange={(event, date) => {
                updateChildBirthday(date ? date : null);
              }}
            />
          </View>
        </View>
        <View style={[styles.footer, styles.justifyContentCenter]}>
          <View>
            <Button
              title="Passer"
              rounded={false}
              disabled={false}
              action={() => {
                navigation.navigate("root");
              }}
            />
          </View>
          <View>
            <Button
              title="Valider"
              rounded={true}
              disabled={!hasCheckedUserSituation}
              action={() => {
                navigation.navigate("root");
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  appName: {
    color: Colors.primaryColor,
    fontSize: 25,
    fontWeight: "bold",
  },
  body: {
    flex: 1,
  },
  checkbox: {
    height: 40,
  },
  choices: {
    flex: 1,
    padding: 15,
  },
  colorPrimary: {
    color: Colors.primaryColor,
  },
  datepickerContainer: {
    padding: 20,
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    paddingBottom: 15,
  },
  header: {
    height: 44,
    margin: 15,
  },
  hide: {
    display: "none",
  },
  justifyContentCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 30,
  },
  textAlignCenter: {
    textAlign: "center",
  },
  title: {
    color: Colors.primaryColor,
    fontSize: 18,
    fontWeight: "bold",
    padding: 15,
  },
  w100: {
    width: "100%",
  },
});
