import React, { useMemo, useState } from "react";
import {
  Alert,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const GREEN = "#00965E";
const LIGHT_GREEN = "#E4F4EE";
const BORDER_GREEN = "#00A875";

type Transaction = {
  id: string;
  name: string;
  date: string;
  amount: number;
  type: "income" | "expense";
};

export default function WalletScreen() {
  const [balance, setBalance] = useState(500);
  const [amount, setAmount] = useState("");
  const [showAddMoney, setShowAddMoney] = useState(false);
  const [showAllTransactions, setShowAllTransactions] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: "1",
      name: "Welton",
      date: "Today at 09:20 am",
      amount: -570,
      type: "expense",
    },
    {
      id: "2",
      name: "Nathsam",
      date: "Today at 09:20 am",
      amount: 570,
      type: "income",
    },
    {
      id: "3",
      name: "Welton",
      date: "Today at 09:20 am",
      amount: -570,
      type: "expense",
    },
    {
      id: "4",
      name: "Nathsam",
      date: "Today at 09:20 am",
      amount: 570,
      type: "income",
    },
    {
      id: "5",
      name: "Nathsam",
      date: "Today at 09:20 am",
      amount: 570,
      type: "income",
    },
  ]);

  /*
   * Calculate total spending from expense transactions.
   */
  const totalSpend = useMemo(() => {
    return transactions
      .filter((transaction) => transaction.type === "expense")
      .reduce((total, transaction) => total + Math.abs(transaction.amount), 0);
  }, [transactions]);

  /*
   * Add money functionality
   */
  const handleAddMoney = () => {
    const numericAmount = Number(amount);

    if (!amount || Number.isNaN(numericAmount) || numericAmount <= 0) {
      Alert.alert("Invalid amount", "Please enter a valid amount.");
      return;
    }

    setBalance((previous) => previous + numericAmount);

    const newTransaction: Transaction = {
      id: Date.now().toString(),
      name: "Money Added",
      date: "Just now",
      amount: numericAmount,
      type: "income",
    };

    setTransactions((previous) => [
      newTransaction,
      ...previous,
    ]);

    setAmount("");
    setShowAddMoney(false);

    Alert.alert(
      "Money Added",
      `$${numericAmount.toFixed(2)} has been added to your wallet.`
    );
  };

  /*
   * Transaction click
   */
  const handleTransactionPress = (transaction: Transaction) => {
    Alert.alert(
      transaction.name,
      `Amount: ${
        transaction.amount < 0 ? "-" : "+"
      }$${Math.abs(transaction.amount).toFixed(2)}\n\n${transaction.date}`
    );
  };

  /*
   * Navigation
   *
   * Change these paths if your existing Expo Router
   * filenames are different.
   */
  const goHome = () => {
    router.push("/");
  };

  const goFavourite = () => {
    router.push("/favourite");
  };

  const goOffer = () => {
    router.push("/offer");
  };

  const goProfile = () => {
    router.push("/profile");
  };

  const displayedTransactions = showAllTransactions
    ? transactions
    : transactions.slice(0, 5);

  return (
    <SafeAreaView style={styles.container}>

      {/* ================================================= */}
      {/* TOP BAR */}
      {/* ================================================= */}

      <View style={styles.topBar}>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => setShowMenu(true)}
          activeOpacity={0.7}
        >
          <Ionicons
            name="menu"
            size={20}
            color="#555"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            Alert.alert(
              "Notifications",
              "You don't have any new notifications."
            )
          }
        >
          <Ionicons
            name="notifications-outline"
            size={21}
            color="#555"
          />
        </TouchableOpacity>

      </View>


      {/* ================================================= */}
      {/* MAIN CONTENT */}
      {/* ================================================= */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        {/* ADD MONEY */}

        <View style={styles.addMoneyWrapper}>

          <TouchableOpacity
            style={styles.addMoneyButton}
            activeOpacity={0.7}
            onPress={() => setShowAddMoney(true)}
          >
            <Text style={styles.addMoneyText}>
              Add Money
            </Text>
          </TouchableOpacity>

        </View>


        {/* ================================================= */}
        {/* BALANCE CARDS */}
        {/* ================================================= */}

        <View style={styles.balanceRow}>

          <View style={styles.balanceCard}>

            <Text style={styles.balanceAmount}>
              ${balance.toFixed(0)}
            </Text>

            <Text style={styles.balanceLabel}>
              Available Balance
            </Text>

          </View>


          <View style={styles.balanceCard}>

            <Text style={styles.balanceAmount}>
              ${totalSpend.toFixed(0)}
            </Text>

            <Text style={styles.balanceLabel}>
              Total Spend
            </Text>

          </View>

        </View>


        {/* ================================================= */}
        {/* TRANSACTIONS TITLE */}
        {/* ================================================= */}

        <View style={styles.transactionHeader}>

          <Text style={styles.transactionTitle}>
            Transactions
          </Text>

          <TouchableOpacity
            onPress={() =>
              setShowAllTransactions(
                (previous) => !previous
              )
            }
          >
            <Text style={styles.seeAll}>
              {showAllTransactions
                ? "Show Less"
                : "See All"}
            </Text>
          </TouchableOpacity>

        </View>


        {/* ================================================= */}
        {/* TRANSACTIONS */}
        {/* ================================================= */}

        <View>

          {displayedTransactions.map(
            (transaction) => (
              <TouchableOpacity
                key={transaction.id}
                style={styles.transactionCard}
                activeOpacity={0.7}
                onPress={() =>
                  handleTransactionPress(transaction)
                }
              >

                {/* Transaction icon */}

                <View
                  style={[
                    styles.transactionIcon,
                    transaction.type === "income"
                      ? styles.incomeIcon
                      : styles.expenseIcon,
                  ]}
                >

                  <Ionicons
                    name={
                      transaction.type === "income"
                        ? "arrow-down"
                        : "arrow-up"
                    }
                    size={17}
                    color={
                      transaction.type === "income"
                        ? "#54A85C"
                        : "#F45151"
                    }
                  />

                </View>


                {/* Transaction information */}

                <View style={styles.transactionInfo}>

                  <Text style={styles.transactionName}>
                    {transaction.name}
                  </Text>

                  <Text style={styles.transactionDate}>
                    {transaction.date}
                  </Text>

                </View>


                {/* Amount */}

                <Text
                  style={[
                    styles.transactionAmount,
                    transaction.type === "income"
                      ? styles.incomeAmount
                      : styles.expenseAmount,
                  ]}
                >
                  {transaction.amount < 0
                    ? "-"
                    : "+"}
                  ${Math.abs(
                    transaction.amount
                  ).toFixed(2)}
                </Text>

              </TouchableOpacity>
            )
          )}

        </View>

      </ScrollView>


      {/* ================================================= */}
      {/* BOTTOM NAVIGATION */}
      {/* ================================================= */}

      <View style={styles.bottomNavigation}>

        {/* HOME */}

        <TouchableOpacity
          style={styles.navigationItem}
          onPress={goHome}
          activeOpacity={0.7}
        >

          <Ionicons
            name="home-outline"
            size={20}
            color="#777"
          />

          <Text style={styles.navigationText}>
            Home
          </Text>

        </TouchableOpacity>


        {/* FAVOURITE */}

        <TouchableOpacity
          style={styles.navigationItem}
          onPress={goFavourite}
          activeOpacity={0.7}
        >

          <Ionicons
            name="heart-outline"
            size={21}
            color="#777"
          />

          <Text style={styles.navigationText}>
            Favourite
          </Text>

        </TouchableOpacity>


        {/* ================================================= */}
        {/* CENTER WALLET BUTTON */}
        {/* ================================================= */}

       {/* CENTER WALLET */}

<TouchableOpacity
  style={styles.walletNavigation}
  activeOpacity={0.9}
>
  <View style={styles.walletShape}>
    <Ionicons
      name="wallet-outline"
      size={24}
      color="#FFFFFF"
    />
  </View>

  <Text style={styles.walletNavigationText}>
    Wallet
  </Text>
</TouchableOpacity>

        {/* OFFER */}

        <TouchableOpacity
          style={styles.navigationItem}
          onPress={goOffer}
          activeOpacity={0.7}
        >

          <Ionicons
            name="pricetag-outline"
            size={20}
            color="#777"
          />

          <Text style={styles.navigationText}>
            Offer
          </Text>

        </TouchableOpacity>


        {/* PROFILE */}

        <TouchableOpacity
          style={styles.navigationItem}
          onPress={goProfile}
          activeOpacity={0.7}
        >

          <Ionicons
            name="person-outline"
            size={20}
            color="#777"
          />

          <Text style={styles.navigationText}>
            Profile
          </Text>

        </TouchableOpacity>

      </View>


      {/* ================================================= */}
      {/* ADD MONEY MODAL */}
      {/* ================================================= */}

      <Modal
        visible={showAddMoney}
        transparent
        animationType="fade"
        onRequestClose={() =>
          setShowAddMoney(false)
        }
      >

        <View style={styles.modalOverlay}>

          <View style={styles.modalContainer}>

            <Text style={styles.modalTitle}>
              Add Money
            </Text>

            <Text style={styles.modalSubtitle}>
              Enter the amount you want to add
            </Text>

            <View style={styles.amountInputContainer}>

              <Text style={styles.dollar}>
                $
              </Text>

              <TextInput
                value={amount}
                onChangeText={setAmount}
                placeholder="0.00"
                placeholderTextColor="#999"
                keyboardType="decimal-pad"
                style={styles.amountInput}
              />

            </View>


            <View style={styles.modalButtons}>

              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => {
                  setAmount("");
                  setShowAddMoney(false);
                }}
              >
                <Text style={styles.cancelText}>
                  Cancel
                </Text>
              </TouchableOpacity>


              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleAddMoney}
              >
                <Text style={styles.confirmText}>
                  Add Money
                </Text>
              </TouchableOpacity>

            </View>

          </View>

        </View>

      </Modal>


      {/* ================================================= */}
      {/* MENU MODAL */}
      {/* ================================================= */}

      <Modal
        visible={showMenu}
        transparent
        animationType="fade"
        onRequestClose={() =>
          setShowMenu(false)
        }
      >

        <TouchableOpacity
          style={styles.menuOverlay}
          activeOpacity={1}
          onPress={() => setShowMenu(false)}
        >

          <View style={styles.menuContainer}>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setShowMenu(false);
                goHome();
              }}
            >

              <Ionicons
                name="home-outline"
                size={19}
                color={GREEN}
              />

              <Text style={styles.menuItemText}>
                Home
              </Text>

            </TouchableOpacity>


            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setShowMenu(false);

                Alert.alert(
                  "Wallet",
                  `Your current balance is $${balance.toFixed(
                    2
                  )}.`
                );
              }}
            >

              <Ionicons
                name="wallet-outline"
                size={19}
                color={GREEN}
              />

              <Text style={styles.menuItemText}>
                Wallet Balance
              </Text>

            </TouchableOpacity>


            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setShowMenu(false);

                Alert.alert(
                  "Help",
                  "How can we help you?"
                );
              }}
            >

              <Ionicons
                name="help-circle-outline"
                size={19}
                color={GREEN}
              />

              <Text style={styles.menuItemText}>
                Help
              </Text>

            </TouchableOpacity>

          </View>

        </TouchableOpacity>

      </Modal>

    </SafeAreaView>
  );
}


/* ===================================================== */
/* STYLES */
/* ===================================================== */

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  scrollContent: {
    paddingHorizontal: 14,
    paddingBottom: 90,
  },


  /* TOP */

  topBar: {
    height: 65,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  menuButton: {
    width: 26,
    height: 27,
    borderRadius: 3,
    backgroundColor: "#9DDBC5",
    alignItems: "center",
    justifyContent: "center",
  },


  /* ADD MONEY */

  addMoneyWrapper: {
    alignItems: "flex-end",
    marginBottom: 22,
  },

  addMoneyButton: {
    width: 130,
    height: 42,
    borderWidth: 1.2,
    borderColor: GREEN,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },

  addMoneyText: {
    fontSize: 14,
    fontWeight: "600",
    color: GREEN,
  },


  /* BALANCE */

  balanceRow: {
    flexDirection: "row",
    gap: 22,
    marginBottom: 24,
  },

  balanceCard: {
    flex: 1,
    height: 110,
    backgroundColor: LIGHT_GREEN,
    borderWidth: 1,
    borderColor: BORDER_GREEN,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },

  balanceAmount: {
    fontSize: 22,
    fontWeight: "600",
    color: "#555",
    marginBottom: 12,
  },

  balanceLabel: {
    fontSize: 12,
    color: "#666",
    fontWeight: "500",
  },


  /* TRANSACTIONS */

  transactionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  transactionTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#444",
  },

  seeAll: {
    fontSize: 10,
    fontWeight: "600",
    color: GREEN,
  },

  transactionCard: {
    height: 49,
    borderWidth: 1,
    borderColor: "#8ADBC1",
    borderRadius: 6,
    marginBottom: 12,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },

  transactionIcon: {
    width: 32,
    height: 32,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  incomeIcon: {
    backgroundColor: "#CBEACF",
  },

  expenseIcon: {
    backgroundColor: "#FFD5D9",
  },

  transactionInfo: {
    flex: 1,
  },

  transactionName: {
    fontSize: 11,
    fontWeight: "600",
    color: "#444",
    marginBottom: 2,
  },

  transactionDate: {
    fontSize: 9,
    color: "#777",
  },

  transactionAmount: {
    fontSize: 11,
    fontWeight: "600",
    marginRight: 3,
  },

  incomeAmount: {
    color: "#444",
  },

  expenseAmount: {
    color: "#444",
  },


  /* ================================================= */
  /* BOTTOM NAVIGATION */
  /* ================================================= */

  bottomNavigation: {
    height: 68,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",

    position: "relative",

    paddingHorizontal: 3,
  },

  navigationItem: {
    width: 62,
    height: 58,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 6,
    gap: 3,
  },

  navigationText: {
    fontSize: 9,
    color: "#777",
    fontWeight: "500",
  },


  /* ================================================= */
  /* CENTER WALLET */
  /* ================================================= */

  walletNavigation: {
    position: "absolute",
    width: 70,
    height: 100,
    bottom: 0,
    left: "50%",
    marginLeft: -35,

    alignItems: "center",
  },

  walletShape: {
    position: "absolute",

    top: 15,

    width: 64,
    height: 62,

    backgroundColor: GREEN,

    borderRadius: 13,

    alignItems: "center",
    justifyContent: "center",

    zIndex: 2,
  },

  /*
   * Creates the pointed top of the wallet button.
   */

  walletTopPoint: {
    position: "absolute",

    top: 7,

    width: 0,
    height: 0,

    borderLeftWidth: 32,
    borderRightWidth: 32,
    borderBottomWidth: 18,

    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: GREEN,

    zIndex: 1,
  },

  /*
   * Creates the pointed bottom.
   */

  walletBottomPoint: {
    position: "absolute",

    top: 67,

    width: 0,
    height: 0,

    borderLeftWidth: 32,
    borderRightWidth: 32,
    borderTopWidth: 18,

    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: GREEN,

    zIndex: 1,
  },

  walletNavigationText: {
    position: "absolute",

    bottom: 2,

    fontSize: 9,
    color: GREEN,
    fontWeight: "600",
  },


  /* ================================================= */
  /* ADD MONEY MODAL */
  /* ================================================= */

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
  },

  modalContainer: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 22,
  },

  modalTitle: {
    fontSize: 19,
    fontWeight: "700",
    color: "#444",
    marginBottom: 5,
  },

  modalSubtitle: {
    fontSize: 12,
    color: "#777",
    marginBottom: 20,
  },

  amountInputContainer: {
    height: 50,
    borderWidth: 1,
    borderColor: GREEN,
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 20,
  },

  dollar: {
    fontSize: 18,
    color: "#555",
    marginRight: 5,
  },

  amountInput: {
    flex: 1,
    fontSize: 17,
    color: "#444",
  },

  modalButtons: {
    flexDirection: "row",
    gap: 10,
  },

  cancelButton: {
    flex: 1,
    height: 43,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },

  cancelText: {
    color: "#666",
    fontWeight: "600",
    fontSize: 13,
  },

  confirmButton: {
    flex: 1,
    height: 43,
    backgroundColor: GREEN,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },

  confirmText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 13,
  },


  /* ================================================= */
  /* MENU */
  /* ================================================= */

  menuOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.15)",
  },

  menuContainer: {
    position: "absolute",
    top: 90,
    left: 14,
    width: 180,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,

    paddingVertical: 7,

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 5,
  },

  menuItem: {
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    gap: 10,
  },

  menuItemText: {
    fontSize: 12,
    color: "#444",
    fontWeight: "500",
  },

});