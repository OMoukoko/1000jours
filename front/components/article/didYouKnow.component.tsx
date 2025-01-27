import type { FC } from "react";
import * as React from "react";
import { StyleSheet, Text } from "react-native";

import {
  Colors,
  FontWeight,
  Labels,
  Margins,
  Paddings,
  Sizes,
} from "../../constants";
import { CommonText, SecondaryText } from "../StyledText";
import { View } from "../Themed";

interface Props {
  description: string;
}

const DidYouKnow: FC<Props> = ({ description }) => {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  return description?.length > 0 ? (
    <View style={styles.didYouKnowContainer}>
      <View style={[styles.cardTitleContainer, styles.positionRelative]}>
        <CommonText style={[styles.didYouKnowTitle]} accessibilityRole="header">
          {Labels.article.didYouKnowTitle}
        </CommonText>
        <Text
          style={[
            styles.cardBackgroundSymbol,
            styles.didYouKnowBackgroundSymbol,
          ]}
          importantForAccessibility="no"
          accessible={false}
        >
          ?
        </Text>
      </View>
      <SecondaryText style={[styles.didYouKnowContent]}>
        {description}
      </SecondaryText>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  cardBackgroundSymbol: {
    fontSize: Sizes.xxxxl,
    fontWeight: "bold",
    paddingLeft: Paddings.default,
    position: "absolute",
    zIndex: -1,
  },
  cardTitleContainer: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "center",
    minHeight: Sizes.xxxl,
    paddingLeft: Paddings.default,
  },
  didYouKnowBackgroundSymbol: {
    color: Colors.primaryYellowLight,
  },
  didYouKnowContainer: {
    backgroundColor: Colors.cardWhite,
    borderBottomColor: Colors.borderGrey,
    borderLeftColor: Colors.primaryYellow,
    borderLeftWidth: 4,
    borderRightColor: Colors.borderGrey,
    borderTopColor: Colors.borderGrey,
    borderWidth: 1,
    marginVertical: Margins.default,
    paddingBottom: Paddings.default,
    paddingTop: Paddings.smallest,
  },
  didYouKnowContent: {
    color: Colors.primaryBlueDark,
    fontSize: Sizes.sm,
    fontWeight: FontWeight.medium,
    lineHeight: Sizes.lg,
    paddingHorizontal: Paddings.default,
    paddingTop: 0,
  },
  didYouKnowTitle: {
    color: Colors.primaryYellowVeryDark,
    fontSize: Sizes.md,
    fontWeight: FontWeight.bold,
    marginVertical: "auto",
  },
  positionRelative: {
    position: "relative",
  },
});

export default DidYouKnow;
