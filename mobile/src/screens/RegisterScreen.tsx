import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { API_BASE_URL } from "../config";
import { colors } from "../theme";
import type { ScreenProps } from "../types";
import { Card, PrimaryButton, ScreenScroll } from "../components/ui";

type RegisterResponse = {
  message?: string;
};

export function RegisterScreen({ onNavigate }: ScreenProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (loading) {
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = (await response.json().catch(() => ({}))) as RegisterResponse;

      if (!response.ok) {
        setMessage(data.message || "Registration failed.");
        return;
      }

      setMessage("Registration successful.");
      onNavigate("login");
    } catch {
      setMessage(
        `Could not reach ${API_BASE_URL}. Start the Next.js app before testing auth.`,
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScreenScroll backgroundColor="#f3f4f6">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.wrap}
      >
        <Card style={styles.authCard}>
          <Text style={styles.title}>Register</Text>

          {message ? <Text style={styles.message}>{message}</Text> : null}

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              value={form.name}
              onChangeText={(name) => setForm((current) => ({ ...current, name }))}
              placeholder="Enter name"
              placeholderTextColor="#7a8782"
              autoComplete="name"
              style={styles.input}
            />
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              value={form.email}
              onChangeText={(email) => setForm((current) => ({ ...current, email }))}
              placeholder="Enter email"
              placeholderTextColor="#7a8782"
              autoCapitalize="none"
              keyboardType="email-address"
              autoComplete="email"
              style={styles.input}
            />
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              value={form.password}
              onChangeText={(password) => setForm((current) => ({ ...current, password }))}
              placeholder="Enter password"
              placeholderTextColor="#7a8782"
              secureTextEntry
              autoComplete="password"
              style={styles.input}
            />
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              value={form.confirmPassword}
              onChangeText={(confirmPassword) =>
                setForm((current) => ({ ...current, confirmPassword }))
              }
              placeholder="Confirm password"
              placeholderTextColor="#7a8782"
              secureTextEntry
              autoComplete="password"
              style={styles.input}
              onSubmitEditing={handleSubmit}
            />
          </View>

          <PrimaryButton
            label={loading ? "Creating account..." : "Register"}
            onPress={handleSubmit}
            style={styles.submitButton}
          />

          <Pressable
            accessibilityRole="button"
            onPress={() => onNavigate("login")}
            style={({ pressed }) => [styles.switchButton, pressed && styles.pressed]}
          >
            <Text style={styles.switchText}>
              Already have an account? <Text style={styles.switchStrong}>Login</Text>
            </Text>
          </Pressable>
        </Card>
      </KeyboardAvoidingView>
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({
  wrap: {
    minHeight: 660,
    paddingHorizontal: 20,
    paddingVertical: 44,
    justifyContent: "center",
  },
  authCard: {
    gap: 18,
    backgroundColor: colors.white,
    borderColor: colors.white,
  },
  title: {
    color: "#111827",
    fontSize: 24,
    lineHeight: 30,
    fontWeight: "800",
  },
  message: {
    borderRadius: 8,
    backgroundColor: colors.dangerBg,
    color: colors.danger,
    padding: 12,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
  },
  fieldGroup: {
    gap: 8,
  },
  label: {
    color: colors.ink,
    fontSize: 14,
    fontWeight: "800",
  },
  input: {
    minHeight: 52,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#cfd9d5",
    backgroundColor: colors.white,
    paddingHorizontal: 14,
    color: colors.ink,
    fontSize: 16,
  },
  submitButton: {
    minHeight: 46,
    borderRadius: 6,
    backgroundColor: "#000000",
    borderColor: "#000000",
  },
  switchButton: {
    minHeight: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  switchText: {
    color: colors.muted,
    fontSize: 14,
    textAlign: "center",
  },
  switchStrong: {
    color: colors.green,
    fontWeight: "900",
  },
  pressed: {
    opacity: 0.72,
  },
});
