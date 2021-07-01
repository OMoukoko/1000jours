/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useMutation } from "@apollo/client/react/hooks";
import * as React from "react";
import { useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";

import { Button, TitleH1 } from "../../components";
import { SecondaryText } from "../../components/StyledText";
import { View } from "../../components/Themed";
import {
  Colors,
  DatabaseQueries,
  FontWeight,
  Labels,
  Margins,
  Paddings,
  Sizes,
  StorageKeysConstants,
} from "../../constants";
import { EpdsSurveyUtils, NotificationUtils, StorageUtils } from "../../utils";
import EpdsResultInformation from "./epdsResultInformation/epdsResultInformation.component";

interface Props {
  result: number;
  startSurveyOver: () => void;
}

const EpdsLightResult: React.FC<Props> = ({ result, startSurveyOver }) => {
  const [addReponseQuery] = useMutation(DatabaseQueries.EPDS_ADD_RESPONSE, {
    onError: (err) => {
      console.log(err);
    },
  });

  const labelsResultats = Labels.epdsSurvey.resultats;
  const resultData = EpdsSurveyUtils.getResultLabelAndStyleLight();

  useEffect(() => {
    const saveEpdsSurveyResults = async () => {
      const newCounter =
        await EpdsSurveyUtils.incrementEpdsSurveyCounterAndGetNewValue();
      // Si newCounter est égal à 1, cela signifie que c'est la première fois que le test EPDS a été passé, on peut alors programmer la notif de rappel
      if (newCounter === 1) {
        await NotificationUtils.scheduleEpdsNotification();
      }
      const genderValue = await StorageUtils.getStringValue(
        StorageKeysConstants.epdsGenderKey
      );
      await addReponseQuery({
        variables: { compteur: newCounter, genre: genderValue, score: result },
      });
    };

    void saveEpdsSurveyResults();
  }, []);
  // Delete saved storage keys for EPDS survey
  void EpdsSurveyUtils.removeEpdsStorageItems();

  return (
    <ScrollView>
      <TitleH1 title={Labels.epdsSurveyLight.titleLight} animated={false} />
      <SecondaryText style={[styles.text, styles.fontBold]}>
        {Labels.epdsSurveyLight.oserEnParler}
      </SecondaryText>
      <SecondaryText style={styles.text}>
        {Labels.epdsSurveyLight.changementsImportants}
      </SecondaryText>
      <SecondaryText style={[styles.text, styles.fontBold]}>
        {labelsResultats.retakeTestInvitation}
      </SecondaryText>
      <EpdsResultInformation
        leftBorderColor={Colors.white}
        informationList={resultData.resultLabels.professionalsList}
      />
      <View style={styles.validateButton}>
        <Button
          title={Labels.epdsSurvey.restartSurvey}
          titleStyle={styles.fontButton}
          rounded={true}
          disabled={false}
          action={() => {
            startSurveyOver();
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  fontBold: {
    fontWeight: FontWeight.bold,
  },
  fontButton: {
    fontSize: Sizes.xs,
    textTransform: "uppercase",
  },
  itemBorder: {
    borderBottomColor: Colors.disabled,
    borderBottomWidth: 1,
    paddingBottom: Margins.smaller,
    paddingTop: Margins.smallest,
  },
  professionalBanner: {
    borderStartColor: Colors.primaryYellowDark,
    borderStartWidth: Margins.smaller,
    margin: Margins.default,
    padding: Paddings.default,
  },
  rowView: {
    flexDirection: "row",
  },
  stateOfMind: {
    alignSelf: "center",
    fontSize: Sizes.sm,
    fontWeight: FontWeight.bold,
    paddingHorizontal: Paddings.default,
  },
  text: {
    color: Colors.commonText,
    fontSize: Sizes.sm,
    fontWeight: FontWeight.medium,
    lineHeight: Sizes.mmd,
    paddingTop: Paddings.default,
  },
  validateButton: {
    alignItems: "center",
  },
});

export default EpdsLightResult;